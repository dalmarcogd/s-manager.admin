import {Component} from "@angular/core";
import {FormComponent} from '../../../../components/form/form.component';
import {ModuleCrudService} from '../../../../service/crud/module/module.crud.service';
import {ModuleDTO} from '../../../../model/module/module.dto';
/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'module-form',
  styleUrls: ['./module.form.component.css'],
  templateUrl: './module.form.component.html'
})
export class ModuleFormComponent extends FormComponent {

  constructor(private moduleCrudService: ModuleCrudService) {
    super();
  }
}
