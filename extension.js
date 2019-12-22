/*
 * @Author: xiaolong.qiu
 * @Date: 2019-12-22 11:59:12
 * @LastEditTime : 2019-12-22 13:47:39
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {px2rem} = require("./_px2rem");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "px2rem" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.px2rem', function (path) {
		
		try {
			px2rem(path.fsPath);
			vscode.window.showInformationMessage('transfer successfully！');
		} catch (error) {
			console.log(error.message);
			vscode.window.showInformationMessage(error.message);
		}
		
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
