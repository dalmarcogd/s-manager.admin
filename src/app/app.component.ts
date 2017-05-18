import { ServiceModule } from './service/service.module';
import { Injector } from '@angular/core';
import {Component} from '@angular/core'
import { ServiceLocator } from "./service/locator/service.locator";

@Component({
  selector: 'app-admin',
  styleUrls: ['./app.component.css'],
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  constructor(injector: Injector) {
    ServiceLocator.setInjector(injector);
  }
}
