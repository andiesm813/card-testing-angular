import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MasterViewComponent } from './master-view/master-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master', loadChildren: () => import('./master/master.routes').then(m => m.routes), data: { text: 'Master' } },
  {
    path: 'master-view',
    component: MasterViewComponent,
    data: {
      text: 'Master View'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
