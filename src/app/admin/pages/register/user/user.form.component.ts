import {Component} from "@angular/core";
import {FormComponent} from '../../../../components/form/form.component';
import {UserCrudService} from '../../../../service/crud/user/user.crud.service';
import {UserDTO} from '../../../../model/user/user.dto';
import {AppTask} from '../../../../core/task/app.task';
import {AppActionTaskFactory} from '../../../../core/task/action/app.action.task.factory';
/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'user-form',
  styleUrls: ["./user.form.component.css"],
  templateUrl: `./user.form.component.html`,
})
export class UserFormComponent extends FormComponent {

  constructor(appTask: AppTask, appActionTaskFactory: AppActionTaskFactory, private userCrudService: UserCrudService) {
    super(appTask, appActionTaskFactory);
  }
}
