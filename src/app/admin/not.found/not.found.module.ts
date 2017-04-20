/**
 * Created by Guilherme on 03/04/2017.
 */

import { NgModule }      from '@angular/core';
import {NotFoundComponent} from "./not.found.component";
import {routing} from "./not.found.routing";

@NgModule({
  imports:       [ routing ],
  declarations: [ NotFoundComponent ],
  exports:      [ NotFoundComponent ],
  bootstrap:    [ NotFoundComponent ]
})
export class NotFoundModule { }
