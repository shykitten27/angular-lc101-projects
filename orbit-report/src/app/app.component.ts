import { Satellite } from './satellite';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[]; 
constructor() {
   this.sourceList = [];
   this.displayList = [];
   let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

   window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        let satlength = fetchedSatellites.length;
        console.log(`satlength or fetchedSatellites.length: ${satlength}`);
        
        // TODO: loop over satellites
        // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
        // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);

        for(let i=0; i < fetchedSatellites.length; i++) {
          let satellite = new Satellite(fetchedSatellites[i].name, 
                                      fetchedSatellites[i].type, 
                                      fetchedSatellites[i].launchDate, 
                                      fetchedSatellites[i].orbitType, 
                                      fetchedSatellites[i].operational);
          this.sourceList.push(satellite); //push new object
        }

      // make a copy of the sourceList to be shown to the user
      this.displayList = this.sourceList.slice(0);
      console.log(`this.displayList.length: ${this.displayList.length}`);
      }.bind(this));
   }.bind(this));

}
search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
}
}