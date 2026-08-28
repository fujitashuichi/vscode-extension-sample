import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "sample-extension" is now active!');

	const disposable = vscode.commands.registerCommand('sample-extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Sample Extension!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
