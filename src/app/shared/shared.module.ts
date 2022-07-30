import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipesModule } from "./pipes/pipes.module";

const MODULES = [PipesModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES],
})
export class SharedModule {}
