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
    { title: 'Configurações', url: '/configurations', icon: 'cog' },
  ];

  darkMode = false;

  constructor() {}

  ngOnInit() {
    this.checkAppMode();
  }

  checkAppMode() {
    const checkIsDarkMode = localStorage.getItem('darkModeActivated');
    checkIsDarkMode == 'true'
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }
}
