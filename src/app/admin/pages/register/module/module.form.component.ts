import {Component} from "@angular/core";
import {FormComponent} from '../../../../components/form/form.component';
import {ModuleCrudService} from '../../../../service/crud/module/module.crud.service';
import {ModuleDTO} from '../../../../model/module/module.dto';
import {AppTask} from '../../../../core/task/app.task';
import {AppActionTaskFactory} from '../../../../core/task/action/app.action.task.factory';
/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'module-form',
  styleUrls: ['./module.form.component.css'],
  templateUrl: './module.form.component.html'
})
export class ModuleFormComponent extends FormComponent {

  constructor(appTask: AppTask, appActionTaskFactory: AppActionTaskFactory, private moduleCrudService: ModuleCrudService) {
    super(appTask, appActionTaskFactory);
  }
}
