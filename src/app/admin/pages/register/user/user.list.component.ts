import {Component} from "@angular/core";
import {ListComponent, ListService} from '../../../../components/list';
import {UserCrudService} from '../../../../service/crud/user/user.crud.service';
import {UserDTO} from '../../../../model/User/User.dto';
import {AppTask} from '../../../../core/task/app.task';
import {AppActionTaskFactory} from '../../../../core/task/action/app.action.task.factory';

/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'users-list',
  styleUrls: [`./user.list.component.css`],
  templateUrl: `./user.list.component.html`,
})
export class UserListComponent extends ListComponent<UserDTO> {

  constructor(appTask: AppTask, appActionTaskFactory: AppActionTaskFactory, private UserCrudService: UserCrudService) {
    super(appTask, appActionTaskFactory);
  }

  getListService(): ListService<UserDTO> {
    return this.UserCrudService;
  }
}
