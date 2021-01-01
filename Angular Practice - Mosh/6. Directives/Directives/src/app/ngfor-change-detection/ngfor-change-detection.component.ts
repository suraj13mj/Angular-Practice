import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-change-detection',
  templateUrl: './ngfor-change-detection.component.html',
  styleUrls: ['./ngfor-change-detection.component.css']
})
export class NgforChangeDetectionComponent {

  Teams = [
    { id: 1, name: "Royal Challengers Bangalore" },
    { id: 2, name: "Chennai Super Kings" },
    { id: 3, name: "Mumbai Indians" }
  ];

  onAddTeam() {
    this.Teams.push({ id: 4, name: "Delhi Capitals" });
  }

  onRemoveTeam(team) {
    let ind = this.Teams.indexOf(team);         //To remove the object from the array, first we get the index of that object
    this.Teams.splice(ind, 1);                  //1 indicates it must be spliced i.e true
  }

  onUpdateTeam(team) {
    team.name = "Team Updated";
  }
}
