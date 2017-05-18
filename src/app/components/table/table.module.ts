import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { TableComponent } from './table.component';

@NgModule({
  imports: [Ng2SmartTableModule],
  declarations: [TableComponent],
  providers: [],
  exports: []
})
export class TableModule { }
