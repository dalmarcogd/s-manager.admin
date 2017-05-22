import { ADMIN_PAGES_HOME, ADMIN_PAGES_ALL, ADMIN_PAGES_REGISTER, ADMIN_PAGES_CONFIGURATION, ADMIN_PAGES_REGISTER_MODULE, ADMIN_PAGES_REGISTER_COSTUMER, ADMIN_PAGES_REGISTER_USER } from './../../app.routing.mapping';
import { StringUtils } from './../../util/string/string.utils';
import { Injectable } from '@angular/core';
import { MenuGroup } from './menu.group';
import { MenuOption } from './menu.option';
import { Router } from '@angular/router';
import { StorageService} from '../../service/storage/storage.service';
import { Subject }    from 'rxjs/Subject';

const KEY_MENU_OPTION_SELECTED: string = "KEY_MENU_OPTION_SELECTED";
const KEY_MENU_GROUP_SELECTED: string = "KEY_MENU_GROUP_SELECTED";

@Injectable()
export class MenuService {

  private menuGroups: Array<MenuGroup> = [];
  private menuOptions: Array<MenuOption> = [];

  private notify: Subject<any> = new Subject<any>();

  constructor(private router: Router, private storageService: StorageService) {
    // Grupos
    let home: MenuGroup = new MenuGroup('Home', 'home', 'home', ADMIN_PAGES_HOME.getRoutingFull());
    let all: MenuGroup = new MenuGroup('Todos', 'all', 'groups', ADMIN_PAGES_ALL.getRoutingFull());
    let register: MenuGroup = new MenuGroup('Cadastro', 'register', 'user', ADMIN_PAGES_REGISTER.getRoutingFull());
    let config: MenuGroup = new MenuGroup('Configuração', 'configuration','lead', ADMIN_PAGES_CONFIGURATION.getRoutingFull());
    // Opções
    let module: MenuOption = new MenuOption('Módulos', 'module', 'groups', ADMIN_PAGES_REGISTER_MODULE.getRoutingFull(), register);
    let costumer: MenuOption = new MenuOption('Clientes', 'costumer', 'groups', ADMIN_PAGES_REGISTER_COSTUMER.getRoutingFull(), register);
    let user: MenuOption = new MenuOption('Usuários', 'user', 'groups', ADMIN_PAGES_REGISTER_USER.getRoutingFull(), register);

    all.menuOptions.push(module);
    all.menuOptions.push(costumer);
    all.menuOptions.push(user);

    this.menuGroups.push(home, all, register, config);
    this.menuOptions.push(module, costumer, user);
  }

  public getMenuOptions() : Array<MenuOption> {
    return this.menuOptions;
  }

  public getMenuGroups() : Array<MenuGroup> {
    return this.menuGroups;
  }

  public getMenuOptionSelected() : MenuOption {
    var option: Object = this.storageService.get(KEY_MENU_OPTION_SELECTED);
    if (!!option) {
      let menuOption: MenuOption = (<MenuOption> option);
      this.router.navigateByUrl(menuOption.router);
      return menuOption;
    }
    return  null;
  }

  public setMenuOptionSelected(selected: MenuOption, navigate: boolean) {
    this.storageService.put(KEY_MENU_OPTION_SELECTED, selected);

    if (!!selected && navigate) {
        this.router.navigateByUrl(selected.router);
    }
  }

  public getMenuGroupSelected() : MenuGroup {
    var option: Object = this.storageService.get(KEY_MENU_GROUP_SELECTED);
    if (!!option) {
      let menuGroup: MenuGroup = (<MenuGroup> option);
      this.router.navigateByUrl(menuGroup.router);
      return menuGroup;
    }
    let group: MenuGroup = this.menuGroups[0];
    this.setMenuGroupSelected(group, true);
    return group;
  }

  public setMenuGroupSelected(selected: MenuGroup, navigate: boolean) {
    this.storageService.put(KEY_MENU_GROUP_SELECTED, selected);
    if (!!selected && navigate) {
        this.router.navigateByUrl(selected.router);
    }
  }

  public resetMenuOptionSelected() {
    this.setMenuOptionSelected(null, false);
  }

  public reloadMenuOptionSelected() {
    this.setMenuOptionSelected(this.getMenuOptionSelected(), true);
  }

  public resetMenuGroupSelected() {
    this.setMenuGroupSelected(this.menuGroups[0], false);
    this.resetMenuOptionSelected();
  }

  public reloadMenuGroupSelected() {
    this.setMenuGroupSelected(this.getMenuGroupSelected(), true);
    this.resetMenuOptionSelected();
  }

  public notifyComponent(notify: (value: any) => void) {
    this.notify.subscribe(notify);
  }

  public setMenuUrl(url: string, navigate?: boolean) {
    let resultOption: MenuOption = this.menuOptions.find((option: MenuOption) => StringUtils.equals(url, option.router));
    if (resultOption != null) {
      this.setMenuOptionSelected(resultOption, navigate);
      this.notify.next(resultOption);
      console.log("achou opcao")
    } else {
      let result: MenuGroup = this.menuGroups.find((group: MenuGroup) => StringUtils.equals(url, group.router));
      if (result != null) {
        this.setMenuGroupSelected(result, navigate);
        this.setMenuOptionSelected(null, false);
        this.notify.next(result);
        console.log("achou grupo")
      } else {
        console.log("volta pro home")
        this.resetMenuGroupSelected();
        this.notify.next(this.menuGroups[0]);
      }
    }
  }
}
