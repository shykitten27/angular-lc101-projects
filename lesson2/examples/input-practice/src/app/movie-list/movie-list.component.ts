import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }
   
   addMovie (newTitle: string) {
      if(newTitle !== "") { //reject blank titles
         if(!this.movies.includes(newTitle)){ //reject duplicate titles
            this.movies.push(newTitle);
         }
      }  
   }
}