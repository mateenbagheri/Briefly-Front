import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  linkTextControl: FormControl = new FormControl([]);
  constructor() {}

  ngOnInit(): void {}

  onSubmitUrl() {
    //send url to backend
  }

  onResetInput() {
    //reset input value
  }
}
