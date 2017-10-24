import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = 'https://api.themoviedb.org/3'
  constructor(public http: Http) {
  }

  getLatesMovies() {
    return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${this.getApiKey()}`)
  }

  getApiKey(): string {
    return '32ce576586b2418200a253015f606685';
  }
}
