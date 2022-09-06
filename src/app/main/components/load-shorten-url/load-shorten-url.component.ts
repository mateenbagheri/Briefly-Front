import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseHttp } from "src/app/core/services/base-http.service";
import { MainService } from "../../shared/services/main.service";

@Component({
  selector: "app-load-shorten-url",
  templateUrl: "./load-shorten-url.component.html",
  styleUrls: ["./load-shorten-url.component.scss"],
})
export class LoadShortenUrlComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.mainService
      .getMainUrl(this.activatedRoute.snapshot.params.id)
      .subscribe((res) => {
        window.open(res.MainUrl, "_self");
        // this.location.back();
      });
  }
}
