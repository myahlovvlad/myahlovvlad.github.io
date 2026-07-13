$ErrorActionPreference = "Stop"

function Invoke-Checked {
  param(
    [Parameter(Mandatory = $true)]
    [string] $FilePath,
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]] $Arguments
  )

  & $FilePath @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Command failed: $FilePath $($Arguments -join ' ')"
  }
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI (gh) is required. Install it, run 'gh auth login', and execute this script again."
}

$repo = "myahlovvlad/myahlovvlad.github.io"

Invoke-Checked gh auth status

if (-not (Test-Path ".git")) {
  Invoke-Checked git init -b main
}

Invoke-Checked git add .

$pending = git status --porcelain
if ($pending) {
  Invoke-Checked git commit -m "Update professional biography landing page"
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  gh repo view $repo *> $null
  if ($LASTEXITCODE -eq 0) {
    Invoke-Checked git remote add origin "https://github.com/$repo.git"
    Invoke-Checked git push -u origin main
  } else {
    Invoke-Checked gh repo create $repo --public --description "Professional biography and selected scientific software engineering cases" --source . --remote origin --push
  }
} else {
  Invoke-Checked git push -u origin main
}

Write-Host "Published: https://github.com/$repo"
Write-Host "Next: Settings -> Pages -> Source -> GitHub Actions"
