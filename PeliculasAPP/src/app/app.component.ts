import { Component } from '@angular/core';
import { TheMovieDbApiService } from './service/peliculas1.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _ps: TheMovieDbApiService) {
  this._ps.getMostPopular().subscribe(data => console.log(data));
  }
}
