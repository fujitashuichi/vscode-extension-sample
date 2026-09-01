function Invoke-WithTimeout {
  param (
      [scriptblock]$ScriptBlock,
      [int]$TimeoutSeconds = 5
  )


  $job = Start-Job -ScriptBlock $ScriptBlock

  $completed = Wait-Job $job -Timeout $TimeoutSeconds

  if (-not $completed) {
      # タイムアウトした場合はプロセスを強制終了して破棄
      Stop-Job $job -ErrorAction SilentlyContinue
      Remove-Job $job -Force -ErrorAction SilentlyContinue
      return $null
  }

  # 完了した場合は結果を受け取ってJobを破棄
  $result = Receive-Job $job
  Remove-Job $job -Force -ErrorAction SilentlyContinue
  return $result
}

Export-ModuleMember -Function Invoke-WithTimeout
