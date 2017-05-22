import { AppActionTask, AppActionType } from './../../core/task/action/app.action.task';
import {BaseDTO} from '../../model/base/base.dto';
import {Component} from '@angular/core';
import {ListService} from './list.service';
import {BaseComponent} from '../base/base.component';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ["./list.component.css"]
})
 export abstract class ListComponent<T extends BaseDTO> extends BaseComponent {

    protected abstract getListService(): ListService<T>;

    protected getActionInit() : AppActionTask {
      return this.createAction(AppActionType.READING)._execute(() => {
          this.getListService().read().then((values: Array<T>) => {
              values.forEach((t: T) => {
                this.getSource().add(t);
              })
          });
          this.getSource().refresh();
      })
    }
    protected abstract getSource() : LocalDataSource;
}
