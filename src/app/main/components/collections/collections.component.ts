import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { filter, first, map } from "rxjs/operators";
import { MainService } from "../../shared/services/main.service";

@Component({
  selector: "app-collections",
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"],
})
export class CollectionsComponent implements OnInit {
  panelOpenState: boolean = false;
  dataSubscription!: Subscription;
  collections: Array<CollectionItem> = [];
  constructor(private mainService: MainService) {
    this.mainService
      .getCollections()
      .pipe(
        first(),
        filter((value) => value),
        map((res) => res.map((el) => new CollectionItem(el)))
      )
      .subscribe((value) => (this.collections = value));
  }

  ngOnInit(): void {}
}

class CollectionItem {
  CollectionID;
  UserID;
  CollectionName;
  constructor(el) {
    this.CollectionID = el?.CollectionID;
    this.UserID = el?.UserID;
    this.CollectionName = el?.CollectionName;
  }
}
