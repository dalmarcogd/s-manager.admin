import {Component} from "@angular/core";
import {ListComponent, ListService} from '../../../../components/list';
import {UserCrudService} from '../../../../service/crud/user/user.crud.service';
import {UserDTO} from '../../../../model/User/User.dto';

/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'users-list',
  styleUrls: [`./user.list.component.css`],
  templateUrl: `./user.list.component.html`,
})
export class UserListComponent extends ListComponent<UserDTO> {

  constructor(private UserCrudService: UserCrudService) {
    super();
  }

  getListService(): ListService<UserDTO> {
    return this.UserCrudService;
  }
}
