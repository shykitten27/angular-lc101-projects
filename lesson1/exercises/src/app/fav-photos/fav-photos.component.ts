import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://media1.tenor.com/images/d6fe74ae4e20f583b906c623f205f111/tenor.gif?itemid=14796668';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/51kpR3PodLL._AC_SX466_.jpg';
  image3 = 'https://media4.giphy.com/media/oNvEMf4dw4UB4aJn0e/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}