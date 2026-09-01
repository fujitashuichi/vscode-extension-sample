import * as vscode from 'vscode';
import { registerCommands } from './commands/registerCommands';
import { AssetStorage } from './assets/AssetStorage';

const EXTENSION_NAME = "sample-extension";

export function activate(context: vscode.ExtensionContext) {
	console.log(`${EXTENSION_NAME} activated.`);
	vscode.window.showInformationMessage(`${EXTENSION_NAME} activated.`);

	const asset = new AssetStorage(context);

	context.subscriptions.push(
		registerCommands(asset)
	);
}

export function deactivate() {
	console.log(`${EXTENSION_NAME} deactivated.`);
}
