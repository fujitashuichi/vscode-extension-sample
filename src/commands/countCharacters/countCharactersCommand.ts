import * as vscode from 'vscode';

const countCharacters = (): void => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('エディタが開かれていません。');
    return;
  }

  const selection = editor.selection;
  const text = editor.document.getText(selection);

  if (!text) {
    vscode.window.showInformationMessage('テキストが選択されていません。');
    return;
  }

  vscode.window.showInformationMessage(`選択中の文字数: ${text.length} 文字`);
};


export function createCountCharacters(): vscode.Disposable {
  return vscode.commands.registerCommand(
    'sample-extension.countCharacters',
    countCharacters
  );
};
