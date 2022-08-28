import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment.prod";
import { MainService } from "../../shared/services/main.service";
import { CollectionSelectionDialogComponent } from "./collection-selection-dialog/collection-selection-dialog.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  linkTextControl: FormControl = new FormControl([]);
  result: { text; route } = { text: "", route: "" };
  constructor(
    private router: Router,
    private mainService: MainService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onSubmitUrl() {
    if (this.linkTextControl.valid) {
      this.mainService
        .shortenUrl(this.linkTextControl.value)
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
    this.dialog.open(CollectionSelectionDialogComponent, {
      minHeight: "50vh",
      minWidth: "40vw",
    });
  }
}
