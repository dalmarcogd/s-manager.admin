import { ADMIN, ADMIN_LOGIN, ADMIN_PAGES, ADMIN_NOT_FOUND } from './../app.routing.mapping';
/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../service/auth/auth.guard';

const routes: Routes = [
  {
    path: ADMIN.getRoutingSimple(),
    component: AdminComponent,
    children: [
      {
        path: ADMIN_LOGIN.getRoutingSimple(), loadChildren: 'app/admin/login/login.module#LoginModule'
      },
      {
        path: ADMIN_PAGES.getRoutingSimple(), loadChildren: 'app/admin/pages/pages.module#PagesModule', canActivate: [ AuthGuard ], 
      },
      {
        path: ADMIN_NOT_FOUND.getRoutingSimple(), loadChildren: 'app/admin/not.found/not.found.module#NotFoundModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
