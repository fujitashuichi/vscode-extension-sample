import * as vscode from 'vscode';
import { createCountCharacters } from './countCharacters/countCharactersCommand';
import { createCheckCodeVersion } from './checkCodeVersion/checkVersionCommand';
import { AssetStorage } from '../assets/AssetStorage';
import { createAuthAzureAndGitHub } from './authAzureAndGitHub/authAzureAndGitHubCommand';

export function registerCommands(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.Disposable.from(
    createCountCharacters(),
    createCheckCodeVersion(asset),
    createAuthAzureAndGitHub(asset)
  );
};
