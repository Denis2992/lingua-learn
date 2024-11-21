import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureHeaderComponent } from '@frontend/shared/feature-header';

@Component({
  selector: 'lingua-learn',
  standalone: true,
  imports: [RouterOutlet, SharedFeatureHeaderComponent],
  templateUrl: './lingua-learn.component.html',
  styleUrl: './lingua-learn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinguaLearnComponent {}
