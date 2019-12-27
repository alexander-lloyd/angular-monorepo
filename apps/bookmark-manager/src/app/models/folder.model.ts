import { FavouriteModel } from './favourite.model';

export interface FolderModel {
  children?: Array<FolderModel | FavouriteModel>;
  name: string;
}
