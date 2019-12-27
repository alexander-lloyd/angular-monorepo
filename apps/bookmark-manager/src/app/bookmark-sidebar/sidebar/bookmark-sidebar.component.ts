import { FlatTreeControl } from '@angular/cdk/tree';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from '@angular/material/tree';
import { Observable } from 'rxjs';

import { FavouriteModel, FavouriteNode, FolderModel } from '../../models';

import {
  getChildren,
  getLevel,
  hasChild,
  isExpandable,
  transformer,
  TreeNode
} from './tree-utils';

/* tslint:disable:template-no-call-expression */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'bm-sidebar',
  styleUrls: ['./bookmark-sidebar.component.css'],
  templateUrl: './bookmark-sidebar.component.html'
})
export class BookmarkSidebarComponent implements OnInit {
  public dataSource: MatTreeFlatDataSource<
    FolderModel | FavouriteModel,
    TreeNode
  >;
  @Input() public favourites$: Observable<Array<FolderModel | FavouriteModel>>;
  public hasChild: (index: number, node: TreeNode) => boolean;
  public treeControl: FlatTreeControl<TreeNode>;
  public treeFlattener: MatTreeFlattener<FavouriteNode, TreeNode>;

  public constructor() {
    this.hasChild = hasChild;
    this.treeFlattener = new MatTreeFlattener<FavouriteNode, TreeNode>(
      transformer,
      getLevel,
      isExpandable,
      getChildren
    );
    this.treeControl = new FlatTreeControl<TreeNode>(getLevel, isExpandable);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  public ngOnInit(): void {
    this.favourites$.subscribe((favourites: FavouriteNode[]) => {
      this.dataSource.data = favourites;
    });
  }
}
