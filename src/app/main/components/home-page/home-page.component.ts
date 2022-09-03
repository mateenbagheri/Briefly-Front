import { Component, OnInit } from "@angular/core";
import { FormControl, RequiredValidator, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { AlertService } from "src/app/core/alert/alert.service";
import { UserService } from "src/app/core/services/user.service";
import { environment } from "src/environments/environment.prod";
import { CollectionItem } from "../../shared/models/collection-item.model";
import { UrlItem } from "../../shared/models/url-item.model";
import { MainService } from "../../shared/services/main.service";
import { CollectionSelectionDialogComponent } from "./collection-selection-dialog/collection-selection-dialog.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  linkTextControl: FormControl = new FormControl([null], Validators.required);
  result!: UrlItem;
  constructor(
    private router: Router,
    private mainService: MainService,
    private dialog: MatDialog,
    public userService: UserService,
    private toaster: AlertService
  ) {}

  ngOnInit(): void {}

  onSubmitUrl() {
    if (this.linkTextControl.valid) {
      this.mainService
        .shortenUrl(this.linkTextControl.value)
        .pipe(
          filter((value) => value),
          map((res) => new UrlItem(res))
        )
        .subscribe((res) => {
          this.result = res;
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
          this.mainService.saveUrlInCollection(
            this.result.LinkID,
            value.CollectionID
          ).subscribe((res)=>{

            this.toaster.showToaster("Url saved successfully");
          });
        }
      });
  }
}
