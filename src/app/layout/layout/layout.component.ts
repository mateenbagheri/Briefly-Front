import { MediaMatcher } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 768px)"); //md support
  }

  ngOnInit(): void {}
}
