/**
 * Created by Guilherme on 03/04/2017.
 */

import { NgModule }      from '@angular/core';
import { ModuleFormComponent } from "./module.form.component";
import { ModuleListComponent } from "./module.list.component";
import {routing} from "./module.routing";

@NgModule({
  imports:      [ routing ],
  declarations: [ ModuleListComponent, ModuleFormComponent],
  bootstrap:    [ ModuleListComponent ]
})
export class ModuleModule { }
