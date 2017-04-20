/**
 * Created by Guilherme on 03/04/2017.
 */

import { NgModule }      from '@angular/core';
import {AdminComponent} from './admin.component';
import {routing as routingAdmin} from './admin.routing';
import {CommonModule} from '@angular/common';

@NgModule({
  imports:      [ routingAdmin,
                  CommonModule ],
  exports:      [],
  declarations: [ AdminComponent ],
  bootstrap:    [ AdminComponent ]
})
export class AdminModule { }
