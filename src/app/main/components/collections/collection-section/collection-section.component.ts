import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import { AlertService } from 'src/app/core/alert/alert.service';
import { MainService } from 'src/app/main/shared/services/main.service';

@Component({
  selector: 'app-collection-section',
  templateUrl: './collection-section.component.html',
  styleUrls: ['./collection-section.component.scss']
})
export class CollectionSectionComponent implements OnInit {
  collections: Array<CollectionItem> = [];

  collectionNameControl = new FormControl([]);
  addMode: boolean = false;
  saveSubscription!: Subscription;

  @Input("selectionMode") selectionMode: "single" | "none" = "none";
  @Output("selectionChange") selectionChange = new EventEmitter<Array<CollectionItem>>();
  selection = new SelectionModel<CollectionItem>();

  constructor(
    private mainService: MainService,
    private toaster: AlertService
  ) {}

  ngOnInit(): void {
    this.initSelection();
    this.getData();
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

export class CollectionItem {
  CollectionID;
  UserID;
  CollectionName;
  constructor(el) {
    this.CollectionID = el?.CollectionID;
    this.UserID = el?.UserID;
    this.CollectionName = el?.CollectionName;
  }
}
