/**
 * Created by Guilherme on 03/04/2017.
 */
import { RouterModule } from '@angular/router';

export const routes = [
  {path: '', redirectTo: 'admin/pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'admin/notfound', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
