import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-home-page-ui-tasks-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page-ui-tasks-links.component.html',
  styleUrl: './home-page-ui-tasks-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageUiTasksLinksComponent {}
