import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
    // canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    // canActivate: [AuthGuard],
  },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
