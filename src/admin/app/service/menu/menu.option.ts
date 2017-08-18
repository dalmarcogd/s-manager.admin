import {MenuGroup} from './menu.group';

export class MenuOption {
    name: string;
    key: string;
    icon: string;
    router: string;
    keyMenuGroup: string;
    text: string;

    constructor(name: string, key: string, icon: string, router: string, menuGroup: MenuGroup) {
      this.name = name;
      this.key = key;
      this.icon = icon;
      this.router = router;
      this.keyMenuGroup = menuGroup.key;
      menuGroup.menuOptions.push(this);
      this.text = name;
    }

    toString() {
      return this.name;
    }
}
