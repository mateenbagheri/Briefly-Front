import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs";
import { filter, first, map } from "rxjs/operators";
import { AlertService } from "src/app/core/alert/alert.service";
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

  collectionNameControl = new FormControl([]);
  addMode: boolean = false;
  saveSubscription!: Subscription;

  constructor(
    private mainService: MainService,
    private toaster: AlertService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mainService
      .getCollections()
      .pipe(
        first(),
        filter((value) => value),
        map((res) => res.map((el) => new CollectionItem(el)))
      )
      .subscribe((value) => (this.collections = value));
  }

  onSubmit() {
    this.saveSubscription = this.mainService
      .addCollection(this.collectionNameControl.value)
      .subscribe(() => {
        this.onClear();
        this.toaster.showToaster("Collection added successfully", "SUCCESS");
        this.getData();
      });
  }

  onClear() {
    this.collectionNameControl.setValue(null);
    this.addMode = false;
  }
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
