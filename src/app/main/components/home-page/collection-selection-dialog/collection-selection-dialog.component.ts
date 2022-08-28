import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { CollectionItem } from "../../collections/collection-section/collection-section.component";

@Component({
  selector: "app-collection-selection-dialog",
  templateUrl: "./collection-selection-dialog.component.html",
  styleUrls: ["./collection-selection-dialog.component.scss"],
})
export class CollectionSelectionDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<any>) {}
  selectedItem!: CollectionItem;
  ngOnInit(): void {}

  selectionChange(event: Array<CollectionItem>) {
    this.selectedItem = event[0];
  }

  onSubmit() {
    this.dialogRef.close(this.selectedItem);
  }
}
