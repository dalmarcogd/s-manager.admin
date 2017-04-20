/**
 * Core module
 */


import { AdminModule } from '../admin/admin.module';
import { ServiceModule } from '../service/service.module';
import { SharedModule } from '../shared/shared.module';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [ SharedModule,
             AdminModule,
             ServiceModule.forRoot()
           ]
})
export class CoreModule {
}