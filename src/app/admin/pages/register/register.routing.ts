/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {RegisterComponent} from "./register.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: RegisterComponent,
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'modules', loadChildren: 'app/admin/pages/register/module/module.module#ModuleModule' },
      { path: 'users', loadChildren: 'app/admin/pages/register/user/user.module#UserModule' }

    ]
  }
];

export const routing = RouterModule.forChild(routes);
