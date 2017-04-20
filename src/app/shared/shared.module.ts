/**
 * 
 */


import { ComponentsModule } from '../components/components.module';
import { ServiceModule } from '../service/service.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [ ServiceModule,
             ComponentsModule,
             CommonModule,
             FormsModule,
             ReactiveFormsModule ],
  exports: [ ServiceModule,
             ComponentsModule,
             CommonModule,
             FormsModule,
             ReactiveFormsModule ]
})
export class SharedModule {
}