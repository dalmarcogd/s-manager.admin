import { Component, EventEmitter, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu/menu.service';
import { MenuOption } from '../../service/menu/menu.option';
import { MenuGroup} from '../../service/menu/menu.group';
import { StringUtils } from '../../util/string/string.utils';
import {Subject} from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: `./menu.component.html`,
})
export class MenuComponent implements OnInit {

  menuOptions: MenuOption[];
  menuGroups: MenuGroup[];

  menuGroupSelected: MenuGroup;
  menuOptionSelected: MenuOption;

  constructor(private menuService: MenuService) {
    this.menuOptions = this.menuService.getMenuOptions();
    this.menuGroups = this.menuService.getMenuGroups();
    this.menuService.notifyComponent((value: any) => {
      if (value instanceof MenuOption) {
        this.menuOptionSelected = value;
      } else if (value instanceof MenuGroup) {
        this.menuGroupSelected = value;
        this.menuOptionSelected = null;
      }
    });
  }

  search = (query: string): MenuOption[] => {
    let menuOptionsToSearch: MenuOption[];
    if (!!this.menuGroupSelected) {
      menuOptionsToSearch = this.menuGroupSelected.menuOptions;
    }

    return this.lookupPolymorphic(query, menuOptionsToSearch);
  }

  lookupPolymorphic = (query: string, source = this.menuOptions): MenuOption[] => {
    if (!query) {
      return source;
    }

    return source.filter((d: MenuOption) => StringUtils.normalize(d.name.toLowerCase()).indexOf(StringUtils.normalize(query.toLowerCase())) > -1);
  }

  lookupMenuOptionSelected(event: any) {
    if (event != null) {
        this.menuOptionSelected = <MenuOption> event;
        this.menuService.setMenuOptionSelected(this.menuOptionSelected, true);
    } else {
        this.menuService.reloadMenuGroupSelected();
    }
  }

  lookupMenuGroupSelected(event: EventEmitter<any>) {
    if (event != null) {
      this.menuService.setMenuGroupSelected(this.menuGroupSelected, true);
    } else {
      this.menuService.setMenuGroupSelected(null, true);
    }
  }

  ngOnInit() {
   this.menuOptionSelected = this.menuService.getMenuOptionSelected();
   this.menuGroupSelected = this.menuService.getMenuGroupSelected();
  }
}
