/**
 * Created by Guilherme on 03/04/2017.
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {AdminComponent} from './admin.component';
import {routing as routingAdmin} from './admin.routing';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports:      [ routingAdmin, SharedModule],
  exports:      [],
  declarations: [ AdminComponent ],
  bootstrap:    [ AdminComponent ],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
