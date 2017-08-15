import { ADMIN_PAGES_HOME, ADMIN_PAGES_REGISTER, ADMIN_PAGES_CONFIGURATION, ADMIN_PAGES_ALL } from './../../app.routing.mapping';
/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {PagesComponent} from "./pages.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: ADMIN_PAGES_ALL.routingSimple, loadChildren: 'app/admin/pages/all/all.module#AllModule' },
      { path: ADMIN_PAGES_HOME.routingSimple, loadChildren: 'app/admin/pages/home/home.module#HomeModule' },
      { path: ADMIN_PAGES_REGISTER.routingSimple, loadChildren: 'app/admin/pages/register/register.module#RegisterModule' },
      { path: ADMIN_PAGES_CONFIGURATION.routingSimple, loadChildren: 'app/admin/pages/configuration/configuration.module#ConfigurationModule' },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
