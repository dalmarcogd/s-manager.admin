import { ADMIN_PAGES, ADMIN_NOT_FOUND, ADMIN_PAGES_HOME } from './app.routing.mapping';
/**
 * Created by Guilherme on 03/04/2017.
 */
import { RouterModule } from '@angular/router';

export const routes = [
  {path: '', redirectTo: ADMIN_PAGES_HOME.getRoutingFull(), pathMatch: 'full'},
  {path: '**', redirectTo: ADMIN_NOT_FOUND.getRoutingFull(), pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
