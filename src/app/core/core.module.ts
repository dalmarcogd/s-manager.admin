/**
 * Core module
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';

import { AdminModule } from '../admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NglModule } from 'ng-lightning';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {AppTask} from './task/app.task';
import {AppState} from './state/app.state';
import {AppActionTaskFactory} from './task/action/app.action.task.factory';

const CORE_PROVIDERS = [
  AppState,
  AppTask,
  AppActionTaskFactory
]

@NgModule({
  imports: [
    SharedModule,
    AdminModule,
    NglModule.forRoot(),
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule,
  ],
  exports: [
    SharedModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule
  ],
  providers: CORE_PROVIDERS
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule já foi carregado, importação deve ser feita apenas no AppModule");
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: CORE_PROVIDERS
    };
  }
}
