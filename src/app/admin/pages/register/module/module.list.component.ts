import { LocalDataSource } from 'ng2-smart-table';
import {Component} from "@angular/core";
import {ListComponent, ListService} from '../../../../components/list';
import {ModuleCrudService} from '../../../../service/crud/module/module.crud.service';
import {ModuleDTO} from '../../../../model/module/module.dto';
import {AppTask} from '../../../../core/task/app.task';
import {AppActionTaskFactory} from '../../../../core/task/action/app.action.task.factory';

/**
 * Created by Guilherme on 03/04/2017.
 */

@Component({
  selector: 'module-list',
  styleUrls: ['./module.list.component.css'],
  templateUrl: '../../../../../components/list/list.component.html'
})
export class ModuleListComponent extends ListComponent<ModuleDTO> {

  settings = {
      columns: {
        code: {
          title: 'Código'
        },
        name: {
          title: 'Nome'
        },
        description: {
          title: 'Descrição'
        },
        prefix: {
          title: 'Prefixo'
        },
        basePackage: {
          title: 'Base package'
        } 
      }
    };
  source = new LocalDataSource();

  constructor(private moduleCrudService: ModuleCrudService) {
    super();
  }

  getListService(): ListService<ModuleDTO> {
    return this.moduleCrudService;
  }
  
  protected getSource() : LocalDataSource {
    return this.source; 
  }
}
