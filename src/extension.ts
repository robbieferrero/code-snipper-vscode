'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    console.log('Code Snipper is now active!');

    let disposeCreateImageFromFile: vscode.Disposable = vscode.commands.registerCommand('extension.createImageFromFile', () => {
        let editor: vscode.TextEditor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        let selection: vscode.Selection = editor.selection;
        let text: string = editor.document.getText(selection);

        vscode.window.showInformationMessage(`Selected characters: ${text}`);
        vscode.window.setStatusBarMessage('Image created from file!', 1000);
    });
    let disposeCreateImageFromSelection: vscode.Disposable = vscode.commands.registerCommand('extension.createImageFromSelection', () => {
        vscode.window.setStatusBarMessage('Image created from selection!', 1000);
    });

    context.subscriptions.push(disposeCreateImageFromFile);
    context.subscriptions.push(disposeCreateImageFromSelection);
}

export function deactivate() {
}