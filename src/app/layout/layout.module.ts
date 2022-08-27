import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutRoutingModule } from "./layout.routing";
import { LayoutComponent } from "./layout/layout.component";
import { LoadingBarComponent } from "./components/loading-bar/loading-bar.component";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { MainComponent } from "./components/main/main.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    LayoutComponent,
    LoadingBarComponent,
    TopNavbarComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    matModules,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class LayoutModule {}
