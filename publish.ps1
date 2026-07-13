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

$remote = $null
$hasOrigin = (git remote) -contains "origin"
if ($hasOrigin) {
  $remote = git remote get-url origin
}

if (-not $remote) {
  Invoke-Checked gh repo create $repo --public --description "Professional biography and selected scientific software engineering cases" --source . --remote origin --push
} else {
  Invoke-Checked git push -u origin main
}

Write-Host "Published: https://github.com/$repo"
Write-Host "Next: Settings -> Pages -> Source -> GitHub Actions"
