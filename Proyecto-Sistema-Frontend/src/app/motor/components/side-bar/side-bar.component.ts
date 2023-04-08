import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'BOMBA 6A',
    children: [
      {
        name: 'Resultados electricos',
        children: [
          { name: '07/07/2022 18:35:24' },
          { name: '07/07/2022 18:19:30' },
          { name: '07/07/2022 18:12:34' },
        ],
      },
      {
        name: 'Los transitorios de arranque',
        children: [
          { name: '07/07/2022 18:35:24' },
          { name: '07/07/2022 18:19:30' },
          { name: '07/07/2022 18:12:34' },
        ],
      },
    ],
  },
  {
    name: 'FAJA 12',
    children: [
      {
        name: 'Resultados electricos',
        children: [
          { name: '07/07/2022 18:35:24' },
          { name: '07/07/2022 18:19:30' },
          { name: '07/07/2022 18:12:34' },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  private __transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.__transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
