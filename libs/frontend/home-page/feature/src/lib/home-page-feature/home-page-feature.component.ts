import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SharedFeatureHeaderComponent } from '@frontend/shared/feature-header';

@Component({
  selector: 'lib-home-page-feature',
  imports: [SharedFeatureHeaderComponent],
  templateUrl: './home-page-feature.component.html',
  styleUrl: './home-page-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageFeatureComponent {}
