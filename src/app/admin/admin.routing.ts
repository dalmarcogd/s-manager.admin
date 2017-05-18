/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../service/auth/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'login', loadChildren: 'app/admin/login/login.module#LoginModule'
      },
      {
        path: 'pages', loadChildren: 'app/admin/pages/pages.module#PagesModule', canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ]
      },
      {
        path: 'notfound', loadChildren: 'app/admin/not.found/not.found.module#NotFoundModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
