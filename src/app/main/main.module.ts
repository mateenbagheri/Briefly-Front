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
import { LoadShortenUrlComponent } from "./components/load-shorten-url/load-shorten-url.component";
import { CollectionsComponent } from "./components/collections/collections.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import {
  MatProgressBar,
  MatProgressBarModule,
} from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SharedModule } from "../shared/shared.module";
import { CollectionSelectionDialogComponent } from "./components/home-page/collection-selection-dialog/collection-selection-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CollectionSectionComponent } from './components/collections/collection-section/collection-section.component';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatProgressBarModule,
  MatDividerModule,
  MatCheckboxModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    MainRoutingComponent,
    HomePageComponent,
    LoadShortenUrlComponent,
    CollectionsComponent,
    CollectionSelectionDialogComponent,
    CollectionSectionComponent,
  ],
  imports: [
    CommonModule,
    matModules,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
  ],
})
export class MainModule {}
