/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {PagesComponent} from "./pages.component";
import {HomeComponent} from "./home/home.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: 'app/admin/pages/home/home.module#HomeModule' }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
