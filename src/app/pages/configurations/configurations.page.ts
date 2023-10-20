import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

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
  }

  async getCurrentLocation() {
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      console.log('Permission status: ', permissionStatus.location);
      if (permissionStatus?.location != 'granted') {
        const requestStatus = await Geolocation.requestPermissions();
        if (requestStatus.location != 'granted') {
          return;
        }
      }

      const options: PositionOptions = {
        maximumAge: 3000,
        timeout: 10000,
        enableHighAccuracy: false
      };

      const position = await Geolocation.getCurrentPosition(options);
      console.log(position);

    } catch (e) {
      console.log(e);
      throw(e);
    }
  }

  saveAll() {
    if (this.darkMode) {
      localStorage.setItem('darkModeActivated', 'true');
    } else {
      localStorage.setItem('darkModeActivated', 'false');
    }

  }

}
