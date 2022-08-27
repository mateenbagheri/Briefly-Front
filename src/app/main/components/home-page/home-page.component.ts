import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  linkTextControl: FormControl = new FormControl([]);

  constructor() {}

  ngOnInit(): void {}

  onSubmitUrl() {}
}
