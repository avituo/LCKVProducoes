import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Portfólio', url: '/portfolio', icon: 'document' },
    { title: 'Orçamento', url: '/budget', icon: 'cash' },
  ];

  constructor() {}
}