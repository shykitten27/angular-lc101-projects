import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Oh Brother, Where Art Thou?', 'The Notebook', 'Baby Driver', 'Atomic Blonde'];

   constructor() { }

   ngOnInit() {
   }

}
