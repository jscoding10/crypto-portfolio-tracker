import { Component, EventEmitter, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crypto-portfolio-tracker';

  route = inject(ActivatedRoute);
  router = inject(Router);
  routerData: any;
  openedNav = false;
  sideNav = [
    {
      title: 'Home',
      icon: 'home',
      url: '',
    },
    {
      title: 'Portfolio',
      icon: 'cases',
      url: '/portfolio',
    },
    {
      title: 'Add Cryptocurrency',
      icon: 'add',
      url: 'add-currency',
    },
  ];

  refresh: EventEmitter<boolean> = new EventEmitter<boolean>();
}
