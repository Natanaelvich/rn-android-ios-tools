import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class EmulatorProvider implements vscode.TreeDataProvider<Emulator> {
  constructor() {}

  getTreeItem(element: Emulator): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Emulator): Thenable<Emulator[]> {
    if (element) {
        return Promise.resolve(
          // this.getDepsInPackageJson(
          //   path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')
          // )
          [new Emulator("Pixel 3a", "31",vscode.TreeItemCollapsibleState.Collapsed)]
        );
    } else {
          return Promise.resolve(
            // this.getDepsInPackageJson(
            //   path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')
            // )
            [new Emulator("Pixel 3a", "31",vscode.TreeItemCollapsibleState.Collapsed)]
          );
        // return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
    }
  }


  private pathExists(p: string): boolean {
    try {
      fs.accessSync(p);
    } catch (err) {
      return false;
    }
    return true;
  }
}

class Emulator extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private api: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.api}`;
    this.description = this.api;
  }

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
  };
}
