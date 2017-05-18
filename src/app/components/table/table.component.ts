import {Component} from "@angular/core";
import {LocalDataSource} from '../../../../node_modules/ng2-smart-table';
/**
 * Created by Guilherme on 11/04/2017.
 */

@Component({
  selector: 'table',
  templateUrl: './table.component.html'
})
export class TableComponent {

  settings= {columns:{}};
  private source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource();
  }
}
