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
      { path: 'all', loadChildren: 'app/admin/pages/all/all.module#AllModule' },
      { path: 'home', loadChildren: 'app/admin/pages/home/home.module#HomeModule' },
      { path: 'register', loadChildren: 'app/admin/pages/register/register.module#RegisterModule' },
      { path: 'configuration', loadChildren: 'app/admin/pages/configuration/configuration.module#ConfigurationModule' },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
