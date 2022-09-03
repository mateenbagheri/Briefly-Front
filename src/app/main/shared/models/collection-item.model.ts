import { UrlItem } from "./url-item.model";

export class CollectionItem {
  CollectionID;
  UserID;
  CollectionName;

  /**Additional Vars */
  Urls: Array<UrlItem> = [];

  constructor(el) {
    this.CollectionID = el?.CollectionID;
    this.UserID = el?.UserID;
    this.CollectionName = el?.CollectionName;
  }
}
