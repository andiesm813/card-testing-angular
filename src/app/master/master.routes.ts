import { Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { DefaultCard1Component } from './default-card1/default-card1.component';
import { DefaultCard2Component } from './default-card2/default-card2.component';
import { ActionsColumn1Component } from './actions-column1/actions-column1.component';
import { ActionsColumn2Component } from './actions-column2/actions-column2.component';
import { MediaColumn1Component } from './media-column1/media-column1.component';
import { MediaColumn2Component } from './media-column2/media-column2.component';
import { SocialCard1Component } from './social-card1/social-card1.component';
import { SocialCard2Component } from './social-card2/social-card2.component';

export const routes: Routes = [{
  path: '', component: MasterComponent, children: [
    {
      path: '',
      redirectTo: 'default-card1',
      pathMatch: 'full'
    },
    {
      path: 'default-card1',
      component: DefaultCard1Component,
      data: {
        text: 'Default Card 1'
      }
    },
    {
      path: 'default-card2',
      component: DefaultCard2Component,
      data: {
        text: 'Default Card 2'
      }
    },
    {
      path: 'actions-column1',
      component: ActionsColumn1Component,
      data: {
        text: 'Actions Column 1'
      }
    },
    {
      path: 'actions-column2',
      component: ActionsColumn2Component,
      data: {
        text: 'Actions Column 2'
      }
    },
    {
      path: 'media-column1',
      component: MediaColumn1Component,
      data: {
        text: 'Media Column 1'
      }
    },
    {
      path: 'media-column2',
      component: MediaColumn2Component,
      data: {
        text: 'Media Column 2'
      }
    },
    {
      path: 'social-card1',
      component: SocialCard1Component,
      data: {
        text: 'Social Card 1'
      }
    },
    {
      path: 'social-card2',
      component: SocialCard2Component,
      data: {
        text: 'Social Card 2'
      }
    }
  ]
}];
