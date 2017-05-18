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
    let home: MenuGroup = new MenuGroup('Home', 'home', 'home', '/admin/pages/home');
    let all: MenuGroup = new MenuGroup('Todos', 'all', 'groups', '/admin/pages/all');
    let register: MenuGroup = new MenuGroup('Cadastro', 'register', 'user', '/admin/pages/register');
    let config: MenuGroup = new MenuGroup('Configuração', 'configuration','lead', '/admin/pages/configuration');
    // Opções
    let module: MenuOption = new MenuOption('Módulos', 'module', 'groups', '/admin/pages/register/modules', register);
    let costumer: MenuOption = new MenuOption('Clientes', 'costumer', 'groups', '/admin/pages/register/costumers', register);
    let user: MenuOption = new MenuOption('Usuários', 'user', 'groups', '/admin/pages/register/users', register);

    all.menuOptions.push(module);
    all.menuOptions.push(costumer);
    all.menuOptions.push(user);

    this.menuGroups.push(all, home, register, config);
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
    this.setMenuGroupSelected(null, false);
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
      let result: MenuGroup = this.menuGroups.find((group: MenuGroup) => url.search(group.router) > -1);
      if (result != null) {
        this.setMenuGroupSelected(result, navigate);
        this.notify.next(result);
        console.log("achou grupo")
      } else {
        console.log("achou nada")
        this.resetMenuOptionSelected();
        this.resetMenuGroupSelected();
      }
    }
  }
}
