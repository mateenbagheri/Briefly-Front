import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/guard/auth.guard";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LayoutComponent } from "./layout/layout.component";
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ],
  },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
