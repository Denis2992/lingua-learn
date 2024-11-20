import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home-page-feature-text-slides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-feature-text-slides.component.html',
  styleUrl: './home-page-feature-text-slides.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageFeatureTextSlidesComponent {}
