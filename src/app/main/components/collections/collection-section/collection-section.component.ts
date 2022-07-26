import { SelectionChange, SelectionModel } from "@angular/cdk/collections";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";
import { filter, first, map } from "rxjs/operators";
import { AlertService } from "src/app/core/alert/alert.service";
import { CollectionItem } from "src/app/main/shared/models/collection-item.model";
import { UrlItem } from "src/app/main/shared/models/url-item.model";
import { MainService } from "src/app/main/shared/services/main.service";

@Component({
  selector: "app-collection-section",
  templateUrl: "./collection-section.component.html",
  styleUrls: ["./collection-section.component.scss"],
})
export class CollectionSectionComponent implements OnInit {
  collections: Array<CollectionItem> = [];

  collectionNameControl = new FormControl([]);
  editID;
  addMode = new BehaviorSubject<boolean>(false);
  saveSubscription!: Subscription;

  @Input("selectionMode") selectionMode: "single" | "none" = "none";
  @Output("selectionChange") selectionChange = new EventEmitter<
    Array<CollectionItem>
  >();
  selection = new SelectionModel<CollectionItem>();

  constructor(
    private mainService: MainService,
    private toaster: AlertService
  ) {}

  ngOnInit(): void {
    this.initSelection();
    this.getData();
    this.addMode.subscribe((value) => {
      if (value == false) {
        this.collectionNameControl.setValue(null);
        this.editID = null;
      }
    });
  }

  initSelection() {
    if (this.selectionMode !== "none") {
      if (this.selectionMode == "single") {
        this.selection = new SelectionModel<CollectionItem>(false, []);
      }
      this.selection.changed.subscribe(
        (value: SelectionChange<CollectionItem>) => {
          this.selectionChange.emit(value.source.selected);
        }
      );
    }
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

  onOpenExpansion(item: CollectionItem) {
    this.mainService
      .getCollectionUrls(item.CollectionID)
      .pipe(
        filter((value) => value),
        map((res) => res.map((el) => new UrlItem(el)))
      )
      .subscribe((value) => {
        item.Urls = value;
      });
  }

  onSubmit() {
    this.saveSubscription = this.mainService
      .addCollection(this.collectionNameControl.value, this.editID)
      .subscribe(() => {
        this.addMode.next(false);
        this.toaster.showToaster(`Collection added successfully`, "SUCCESS");
        this.getData();
      });
  }

  afterSubmit() {}

  onEdit(item: CollectionItem) {
    this.addMode.next(true);
    this.editID = item.CollectionID;
    this.collectionNameControl.setValue(item.CollectionName);
  }

  onDelete(item: CollectionItem) {
    this.mainService.deleteCollection(item.CollectionID).subscribe(() => {
      this.getData();
      this.toaster.showToaster("Collection deleted successfully", "SUCCESS");
    });
  }
}
