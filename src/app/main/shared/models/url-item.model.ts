import { environment } from "src/environments/environment.prod";

export class UrlItem {
  LinkID;
  ShortenedUrl;
  MainUrl;
  ExpDate;
  CollectionID;
  FullShortenedUrl;
  constructor(el) {
    this.LinkID = el?.LinkID;
    this.ShortenedUrl = el?.ShortenedUrl;
    this.MainUrl = el?.MainUrl;
    this.ExpDate = el?.ExpDate;
    this.CollectionID = el?.CollectionID;

    this.FullShortenedUrl = `http://localhost:4200/briefly/${el.ShortenedUrl}`;
  }
}
