import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
  styleUrls: ['./ngfor-trackby.component.css']
})
export class NgforTrackbyComponent {

  Courses; 
  Teams;

  onLoad() {
    this.Courses = [
      { id: 1, name: ".NET" },
      { id: 2, name: "Java" },
      { id: 3, name: "Node" }
    ]
  }


  onLoadTeams() {
    this.Teams = [
      { id: 1, name: "RCB" },
      { id: 2, name: "CSK" },
      { id: 3, name: "MI" }
    ]
  }

  trackTeamsId(index, team) {
    console.log(team.id)
    return team ? team.id : undefined;
  }
}
