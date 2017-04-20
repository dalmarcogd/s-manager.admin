/**
 * Created by Guilherme on 03/04/2017.
 */

import { SharedModule } from '../../shared/shared.module';
import { routing } from './login.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {LoginComponent} from './login.component';


import { NglModule } from 'ng-lightning';


@NgModule({
  imports:      [ routing,
                  SharedModule,
                  NglModule.forRoot() ],
  declarations: [ LoginComponent ],
  exports:      [ LoginComponent ],
  bootstrap:    [ LoginComponent ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
