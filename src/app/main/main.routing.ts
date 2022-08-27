import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionsComponent } from "./components/collections/collections.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoadShortenUrlComponent } from "./components/load-shorten-url/load-shorten-url.component";
import { MainRoutingComponent } from "./main-routing/main-routing.component";

const routes: Routes = [
  {
    path: "",
    component: MainRoutingComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomePageComponent },
      { path: "collections", component: CollectionsComponent },
      {
        path: ":id",
        component: LoadShortenUrlComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
