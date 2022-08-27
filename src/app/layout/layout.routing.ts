import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guard/auth.guard";
import { MainComponent } from "./components/main/main.component";
import { LayoutComponent } from "./layout/layout.component";
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "main", pathMatch: "full" },
      {
        path: "main",
        loadChildren: () =>
          import("../main/main.module").then((m) => m.MainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
