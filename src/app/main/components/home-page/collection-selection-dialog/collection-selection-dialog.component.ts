import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-collection-selection-dialog",
  templateUrl: "./collection-selection-dialog.component.html",
  styleUrls: ["./collection-selection-dialog.component.scss"],
})
export class CollectionSelectionDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<any>) {}

  ngOnInit(): void {}

  selectionChange(event) {
    console.log(event);
  }
}
