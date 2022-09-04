export class UrlItem {
  LinkID;
  ShortenedUrl;
  MainUrl;
  ExpDate;

  // CollectionID;
  FullShortenedUrl;
  CreateDate;
  HitDate
  CollectionName
  hitNumber
  constructor(el) {
    this.LinkID = el?.LinkID;
    this.ShortenedUrl = el?.ShortenedUrl;
    this.MainUrl = el?.MainUrl;
    this.ExpDate = el?.ExpDate;
    // this.CollectionID = el?.CollectionID;
    this.CreateDate = el?.CreateDate
    this.HitDate = el?.HitDate
    this.CollectionName = el?.CollectionName
    this.hitNumber = el?.hitnumber
    
    this.FullShortenedUrl = `http://localhost:4200/briefly/${el.ShortenedUrl}`;
  }
}
