import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'welcome-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-user.component.html',
  styleUrl: './welcome-user.component.scss',
})
export class WelcomeUserComponent {}
