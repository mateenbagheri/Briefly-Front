import { Component, OnInit } from "@angular/core";
import { FormControl, RequiredValidator, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AlertService } from "src/app/core/alert/alert.service";
import { UserService } from "src/app/core/services/user.service";
import { environment } from "src/environments/environment.prod";
import { MainService } from "../../shared/services/main.service";
import { CollectionItem } from "../collections/collection-section/collection-section.component";
import { CollectionSelectionDialogComponent } from "./collection-selection-dialog/collection-selection-dialog.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  linkTextControl: FormControl = new FormControl([null], Validators.required);
  result: { text; route } = { text: "", route: "" };
  constructor(
    private router: Router,
    private mainService: MainService,
    private dialog: MatDialog,
    public userService: UserService,
    private toaster: AlertService
  ) {}

  ngOnInit(): void {}

  onSubmitUrl(CollectionID?) {
    if (this.linkTextControl.valid) {
      this.mainService
        .shortenUrlOrSave(this.linkTextControl.value, CollectionID)
        .subscribe((res) => {
          this.result = {
            text: `http://localhost:4200${environment.serviceBaseUrl}${res.ShortenedUrl}`,
            route: res.ShortenedUrl,
          };
        });
    }
  }

  openShortenUrl(route) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`briefly/${route}`])
    );
    window.open(url, "_blank");
  }

  onSaveBtn() {
    this.dialog
      .open(CollectionSelectionDialogComponent, {
        minHeight: "50vh",
        minWidth: "40vw",
      })
      .afterClosed()
      .subscribe((value: CollectionItem) => {
        if (value) {
          /**Save */
          this.onSubmitUrl(value.CollectionID);
          this.toaster.showToaster("Url saved successfully");
        }
      });
  }
}
