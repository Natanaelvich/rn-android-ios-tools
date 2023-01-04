import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class NodeDependenciesProvider implements vscode.TreeDataProvider<Dependency> {
  constructor() {}

  getTreeItem(element: Dependency): vscode.TreeItem {
    return element;
  }

  getChildren(element?: Dependency): Thenable<Dependency[]> {
    if (element) {
        return Promise.resolve(
          // this.getDepsInPackageJson(
          //   path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')
          // )
          [new Dependency("Teste", "v1.1.1",vscode.TreeItemCollapsibleState.Collapsed)]
        );
    } else {
          return Promise.resolve(
            // this.getDepsInPackageJson(
            //   path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')
            // )
            [new Dependency("Teste", "v1.1.1",vscode.TreeItemCollapsibleState.Collapsed)]
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

class Dependency extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.version}`;
    this.description = this.version;
  }

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
  };
}
