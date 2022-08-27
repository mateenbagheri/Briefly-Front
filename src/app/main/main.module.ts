import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRoutingComponent } from "./main-routing/main-routing.component";
import { MainRoutingModule } from "./main.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HomePageComponent } from "./components/home-page/home-page.component";

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [MainRoutingComponent, HomePageComponent],
  imports: [
    CommonModule,
    matModules,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
  ],
})
export class MainModule {}
