import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from './../../providers/movie/movie';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
  providers: [
    MovieProvider
  ]
})
export class MoviePage {
  public lista_movies = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        const object = JSON.parse(response._body);
        this.lista_movies = object.results;
      }, error=>{
        console.log(error);
      }
    )
  }

}
