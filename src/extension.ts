import * as vscode from 'vscode';
import { registerCommands } from './commands/registerCommands';

export function activate(context: vscode.ExtensionContext) {
	console.log('"sample-extension" activated.');
	vscode.window.showInformationMessage(`"sample-extension" activated.`);

	context.subscriptions.push(
		registerCommands()
	);
}

export function deactivate() {
	console.log('"sample-extension" deactivated.');
}
