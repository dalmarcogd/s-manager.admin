/**
 * Created by Guilherme on 03/04/2017.
 */

import { NgModule }      from '@angular/core';
import {routing} from "./pages.routing";
import {PagesComponent} from "./pages.component";
import {HomeModule} from "./home/home.module";

@NgModule({
  imports:      [ routing ],
  declarations: [ PagesComponent ],
  bootstrap:    [ PagesComponent ]
})
export class PagesModule { }
