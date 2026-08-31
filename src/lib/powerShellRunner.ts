import * as process from "node:process";
import * as vscode from "vscode";

export async function runPowerShellScript(
  scriptUri: vscode.Uri,
  taskName: string
): Promise<void> {
  const isSameTask = vscode.tasks.taskExecutions.some(t => t.task.name === taskName);
  if (isSameTask) {
    vscode.window.showErrorMessage(`既に '${taskName}' が実行中です`);
    return;
  }

  const isWindows = process.platform === "win32";
  const shellPath = isWindows ? "powershell.exe" : "pwsh";

  const task = new vscode.Task(
    { type: "shell" },
    vscode.TaskScope.Workspace,
    taskName,
    "Extension PowerShell",
    new vscode.ShellExecution(
      shellPath,
      [
        "-NoProfile",
        "-ExecutionPolicy", "Bypass",
        "-File", scriptUri.fsPath
      ]
    )
  );

  await vscode.tasks.executeTask(task);
}
