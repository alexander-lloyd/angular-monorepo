import {
  getChildren,
  getLevel,
  hasChild,
  transformer,
  TreeNode
} from './tree-utils';
import { FavouriteModel, FolderModel } from '../../models';

describe('Favourites Tree Utils', () => {
  const treeNode: TreeNode = {
    name: 'name',
    level: 0,
    expandable: true
  };

  const favouriteModel: FavouriteModel = {
    name: 'GitHub',
    url: 'https://github.com/alexander-lloyd',
    tags: []
  };

  const folderModel: FolderModel = {
    name: 'Development Tools',
    children: [favouriteModel]
  };

  // transformer
  test.each([
    [{ expandable: true, level: 0, name: 'Development Tools' }, folderModel, 0]
  ])(
    'should return %o transformer(%o, %i)',
    (expected: TreeNode, model: FolderModel, level: number) => {
      const actual = transformer(model, level);
      expect(actual).toEqual(expected);
    }
  );

  // getLevel
  test.each([[0, { ...treeNode, level: 0 }], [1, { ...treeNode, level: 1 }]])(
    'should return %i getLevel(%o)',
    (expected: number, node: TreeNode) => {
      const actual = getLevel(node);
      expect(actual).toBe(expected);
    }
  );

  // isExpandable
  test.each([
    [true, { ...treeNode, expandable: true }],
    [false, { ...treeNode, expandable: false }]
  ])(
    'should return %s isExpandable(%o)',
    (expected: boolean, node: TreeNode) => {
      const actual = hasChild(0, node);
      expect(actual).toEqual(expected);
    }
  );

  // getChildren
  it('should getChildren', () => {
    expect(getChildren(folderModel)).toEqual([favouriteModel]);
  });

  // hasChild
  test.each([
    [true, { ...treeNode, expandable: true }],
    [false, { ...treeNode, expandable: false }]
  ])(
    'should return %s hasChild(_, %o)',
    (expected: boolean, node: TreeNode) => {
      const actual = hasChild(0, node);
      expect(actual).toEqual(expected);
    }
  );
});
