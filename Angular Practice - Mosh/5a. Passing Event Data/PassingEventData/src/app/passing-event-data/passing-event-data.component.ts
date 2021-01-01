import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'passing-event-data',
  templateUrl: './passing-event-data.component.html',
  styleUrls: ['./passing-event-data.component.css']
})
export class PassingEventDataComponent {

  @Input('is-liked') isliked : boolean ;
  @Input('val-liked') valliked : string ;

  @Output() likeClick = new EventEmitter();

  onClicked(){
    if(this.valliked == 'Liked'){
      this.isliked = !this.isliked;
      this.valliked = 'Not-Liked';
    }
    else{
      this.isliked = !this.isliked;
      this.valliked = 'Liked';
    }

    this.likeClick.emit(this.isliked);                                //Emitting Boolean value, when likeClick custom event is raised
    this.likeClick.emit({LikeValue : this.isliked})                   //We can also emit JS Objects
                                                                      //All the subscribers of the likeClick event can access these emitted data
                                                                      //i.e the subsciber here is the onLikeClicked() of app.component.ts
  }
}



export interface LikeReturnType {
  LikeValue : boolean
}