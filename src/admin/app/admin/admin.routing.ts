import { ADMIN, ADMIN_PAGES, ADMIN_LOGIN, ADMIN_NOT_FOUND } from './../app.routing.mapping';

/**
 * Created by Guilherme on 03/04/2017.
 */
import { Routes, RouterModule }  from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../service/auth/auth.guard';

const routes: Routes = [
  {
    path: ADMIN.routingSimple,
    component: AdminComponent,
    children: [
      {
        path: ADMIN_LOGIN.routingSimple, loadChildren: 'app/admin/login/login.module#LoginModule'
      },
      {
        path: ADMIN_PAGES.routingSimple, loadChildren: 'app/admin/pages/pages.module#PagesModule', canActivate: [ AuthGuard ], 
      },
      {
        path: ADMIN_NOT_FOUND.routingSimple, loadChildren: 'app/admin/not.found/not.found.module#NotFoundModule'
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
