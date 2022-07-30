import { ClassProvider, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./core/guard/auth.guard";
import { CoreModule } from "./core/core.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { MatIconModule } from "@angular/material/icon";

const HTTP_AUTH_GUARD: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthGuard,
  multi: true,
};

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [HTTP_AUTH_GUARD, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
