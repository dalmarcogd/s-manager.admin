
import { MenuOption} from './menu.option';

export class MenuGroup {

  name: string;
  key: string;
  icon: string;
  router: string;
  menuOptions: Array<MenuOption> = new Array<MenuOption>();

  constructor(name: string, key: string, icon: string, router: string) {
    this.name = name;
    this.key = key;
    this.icon = icon;
    this.router = router;
  }

  toString() {
    return this.name;
  }
}
