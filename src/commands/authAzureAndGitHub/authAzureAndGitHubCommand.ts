import * as vscode from "vscode";
import { AssetStorage } from "../../assets/AssetStorage";
import { runPowerShellScript } from "../../lib/powerShellRunner";

const TASK_NAME = "Auth Azure And GitHub";

const authAzureAndGitHub = async (
  asset: AssetStorage
): Promise<void> => {
  await runPowerShellScript(
    asset.getUri("powerShell/scripts/authAzureAndGitHub.ps1"),
    TASK_NAME
  );
};


export function createAuthAzureAndGitHub(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.commands.registerCommand(
    'sample-extension.authAzureAndGitHub',
    async () => await authAzureAndGitHub(asset)
  );
}
