import { FavouriteNode, FolderModel } from '../../models';

/**
 * Representation of the Favourite tree in the Material Tree.
 */
export interface TreeNode {
  expandable: boolean;
  level: number;
  name: string;
}

/**
 * Transform the model into a TreeNode.
 * @param children The children folders.
 * @param name The name of the node.
 * @param level The level in the tree.
 */
export function transformer(
  { children, name }: FolderModel,
  level: number
): TreeNode {
  return {
    expandable: !!children && children.length > 0,
    level,
    name
  };
}

/**
 * Get the current level down the tree.
 * @param node The TreeNode.
 * @returns The level down the tree.
 */
export function getLevel(node: TreeNode): number {
  return node.level;
}

/**
 * Should this node be expanded?
 * @param node The TreeNode.
 * @returns true if the node should be expandable.
 */
export function isExpandable(node: TreeNode): boolean {
  return node.expandable;
}

/**
 * Get the children nodes of the tree.
 * @param node Tbe TreeNode.
 * @returns Children nodes.
 */
export function getChildren(node: FolderModel): FavouriteNode[] {
  return node.children || [];
}

/**
 * Does the tree noe have children?
 * @param index The index in the tree.
 * @param node The TreeNode.
 * @returns true if the node has children.
 */
export function hasChild(index: number, node: TreeNode): boolean {
  return node.expandable;
}
