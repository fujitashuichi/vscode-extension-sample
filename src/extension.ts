import * as vscode from 'vscode';
import { registerCommands } from './commands/registerCommands';
import { AssetStorage } from './assets/AssetStorage';

export function activate(context: vscode.ExtensionContext) {
	console.log('"sample-extension" activated.');
	vscode.window.showInformationMessage(`"sample-extension" activated.`);

	const asset = new AssetStorage(context);

	context.subscriptions.push(
		registerCommands(asset)
	);
}

export function deactivate() {
	console.log('"sample-extension" deactivated.');
}
