import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {

  darkMode = false;

  constructor() { }

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
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);

    if (this.darkMode) {
      localStorage.setItem('darkModeActivated', 'true');
    } else {
      localStorage.setItem('darkModeActivated', 'false');
    }
  }

}
