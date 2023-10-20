import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.page.html',
  styleUrls: ['./configurations.page.scss'],
})
export class ConfigurationsPage implements OnInit {

  darkMode = false;
  accountStatus = false;
  userEmail = false;
  username = false;

  constructor() { }

  async ngOnInit() {
    this.checkAppMode();
  }

  checkAppMode() {
    const checkIsDarkMode = localStorage.getItem('darkModeActivated');
    const checkIsAccountActivated = localStorage.getItem('accountStatusActivated');

    checkIsDarkMode == 'true'
      ? (this.darkMode = true)
      : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);

    checkIsAccountActivated == 'true'
      ? (this.accountStatus = true)
      : (this.accountStatus = false);
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
/*
  checkAccountInfo() {
    const inputEmail = document.getElementById('email') as HTMLInputElement | null;
    const inputUser = document.getElementById('user') as HTMLInputElement | null;

    const valueEmail = inputEmail?.value;
    const valueUser = inputUser?.value;

    
    inputEmail?.addEventListener('input', function (event) {
      const targetEmail = event.target as HTMLInputElement;
      console.log(targetEmail.value);
    });
    console.log(valueEmail);

    inputUser?.addEventListener('input', function (event) {
      const target = event.target as HTMLInputElement;
      console.log(target.value);
    });
    console.log(valueUser);
  }*/

  changeUserEmail() {
    this.userEmail = !this.userEmail;
  }

  changeUserName() {
    this.username = !this.username;
  }

  changeAccountStatus() {
    this.accountStatus = !this.accountStatus;
    console.log(this.accountStatus);
  }

  saveAll() {
    if (this.darkMode) {
      localStorage.setItem('darkModeActivated', 'true');
    } else {
      localStorage.setItem('darkModeActivated', 'false');
    }

    if (this.accountStatus) {
      localStorage.setItem('accountStatusActivated', 'true');
    } else {
      localStorage.setItem('accountStatusActivated', 'false');
    }

    if (this.username) {
      localStorage.setItem('username', "usuário teste");
    } else {
      localStorage.setItem('username', 'false');
    }

    if (this.userEmail) {
      localStorage.setItem('userEmail', "Email@teste");
    } else {
      localStorage.setItem('userEmail', 'false');
    }
    
  }
}
