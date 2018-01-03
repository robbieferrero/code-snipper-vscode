'use strict';
import * as vscode from 'vscode';
import * as copper from 'code-snipper';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

    console.log('Code Snipper is now active!');

    let disposeCreateImageFromFile: vscode.Disposable = vscode.commands.registerCommand('extension.createImageFromFile', () => {
        let editor: vscode.TextEditor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage(`There was an issue with the current editor, please try again.`);
            return;
        }

        let fileName: string = editor.document.fileName;
        // TODO: Add output filename support. Add temporary filename support
        if (!fs.existsSync(fileName)) {
            vscode.window.showInformationMessage(`Current file path cannot be found. Please save your file if you have not and try again.`);
            return;
        }
        
        const config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('code-snipper');
        let options: object = {
            resolution: config.get('resolution'),
            theme: config.get('theme'),
            font: config.get('font'),
            fontSize: config.get('fontSize')
        };

        let result = copper(fileName, options);
        
        vscode.window.setStatusBarMessage('Image created from file!', 1000);
    });
    let disposeCreateImageFromSelection: vscode.Disposable = vscode.commands.registerCommand('extension.createImageFromSelection', () => {
        let editor: vscode.TextEditor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        let selection: vscode.Selection = editor.selection;
        let text: string = editor.document.getText(selection);

        vscode.window.showInformationMessage(`Selected characters: ${text}`);
        vscode.window.setStatusBarMessage('Image created from selection!', 1000);
    });

    context.subscriptions.push(disposeCreateImageFromFile);
    context.subscriptions.push(disposeCreateImageFromSelection);
}

export function deactivate() {
}