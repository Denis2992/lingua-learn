import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { HeaderLogoComponent } from '../components/logo/header-logo.component';

@Component({
  selector: 'shared-feature-header',
  standalone: true,
  imports: [TuiButton, HeaderLogoComponent],
  templateUrl: './shared-feature-header.component.html',
  styleUrl: './shared-feature-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedFeatureHeaderComponent {}
