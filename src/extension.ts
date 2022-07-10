import { ExtensionContext, commands, window } from 'vscode';

import { SidebarProvider } from './providers/SidebarProvider';

export function activate(context: ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(window.registerWebviewViewProvider('fargo-vscode', sidebarProvider));

  context.subscriptions.push(
    commands.registerCommand('fargo-vscode.install', () => {
      window.showInformationMessage('Fargo is installed');
    })
  );
}

export function deactivate() {}
