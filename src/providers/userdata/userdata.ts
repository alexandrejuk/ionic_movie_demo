import { Injectable } from '@angular/core';

@Injectable()
export class UserdataProvider {
  private config = {
    showSlide: false,
    name: '',
    username: ''
  };


  constructor() {

  }

  getConfigData():any {
    return localStorage.getItem('config');
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: '',
      username: ''
    };

    if(showSlide) {
      config.showSlide = showSlide;
    }

    if(name) {
      config.name = name;
    }

    if(username) {
      config.username = username;
    }

    localStorage.setItem('config', JSON.stringify(config));
  }
}
