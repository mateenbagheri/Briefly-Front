import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PipesModule } from "./pipes/pipes.module";
import { ClickStopPropagationDirective } from "./directives/click-stop-propagation.directive";

const MODULES = [PipesModule];

const Directives = [ClickStopPropagationDirective];

@NgModule({
  declarations: [...Directives],
  imports: [CommonModule, ...MODULES],
  exports: [MODULES, ...Directives],
})
export class SharedModule {}
