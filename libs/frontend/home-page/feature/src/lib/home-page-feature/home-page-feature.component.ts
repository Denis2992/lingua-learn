import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home-page-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-feature.component.html',
  styleUrl: './home-page-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageFeatureComponent {}
