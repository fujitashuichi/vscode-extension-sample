import * as vscode from 'vscode';
import { createCountCharacters } from './countCharacters/countCharactersCommand';

export function registerCommands(): vscode.Disposable {
  return vscode.Disposable.from(
    createCountCharacters()
  );
};
