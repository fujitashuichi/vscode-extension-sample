import * as vscode from "vscode";
import { AssetStorage } from "../../assets/AssetStorage";
import { runPowerShellScript } from "../../lib/powerShellRunner";


const TASK_NAME = "Check Code Version";

const checkCodeVersion = async (
  asset: AssetStorage
): Promise<void> => {
  await runPowerShellScript(
    asset.getUri("powerShell/scripts/checkCodeVersion.ps1"),
    TASK_NAME
  );
};


export function createCheckCodeVersion(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.commands.registerCommand(
    'sample-extension.checkCodeVersion',
    async () => await checkCodeVersion(asset)
  );
}
