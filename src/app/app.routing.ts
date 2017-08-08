import { ADMIN_PAGES_HOME, ADMIN_NOT_FOUND } from './app.routing.mapping';

/**
 * Created by Guilherme on 03/04/2017.
 */
import { RouterModule } from '@angular/router';

export const routes = [
  {path: '', redirectTo: ADMIN_PAGES_HOME.routingFull, pathMatch: 'full'},
  {path: '**', redirectTo: ADMIN_NOT_FOUND.routingFull, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
