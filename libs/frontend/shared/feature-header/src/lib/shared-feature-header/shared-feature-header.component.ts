import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-feature-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-feature-header.component.html',
  styleUrl: './shared-feature-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedFeatureHeaderComponent {}
