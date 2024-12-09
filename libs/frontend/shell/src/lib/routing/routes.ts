import { Route } from '@angular/router';
import { LinguaLearnComponent } from '../shell/lingua-learn.component';
import { HomePageFeatureComponent } from '@frontend/home-page/feature';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageFeatureComponent,
  },
];
