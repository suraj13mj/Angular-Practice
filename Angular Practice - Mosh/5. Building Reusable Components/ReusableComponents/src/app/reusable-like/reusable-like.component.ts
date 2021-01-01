
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector : "reusable-like",
  templateUrl : './reusable-like.component.html'
  //inputs : ['isLiked','button_value']
})
export class ReusableLikeComponent {

  @Input('is-liked') isLiked : boolean;
  @Input('button-value') button_value : string;

  @Output('lclick') likeClick = new EventEmitter();

  onClick(){                                   //UNDERSTAND Properly understand How this works, defining and subscribing of Custom event
    if(this.button_value == "Liked"){
      this.button_value = "Not-Liked";
      this.isLiked = false;
    }
    else{
      this.button_value = "Liked";
      this.isLiked = true;
    }
    
    this.likeClick.emit();                    //emitting the custom event
  }
}


/*
Input Property

1. To add Property Binding (Input Properties) to the components, we have 2 methods

Method 1: Import the Input decorator and append @Input() to each of the fields of the components
  or
Method 2: Add a new field in the Component Metadata i.e inputs = [] and specify the fields in the array


2. We should always prefer Method 1 because, whenever suppose we change the field names, there is no extra step of changing
the field names listed in inputs[] array. If not changed then it might break the application.

*/


/*
Input Property Alias.

1. In JavaScript we can't use Kebab case i.e is-liked for variables in JS/TS, but HTML properties usually have Kebab Case.
2. Therefore we can define alias for these properties.
3. Another advantage of using alias is that, it keeps distinct separation between View and Component i.e
  - Suppose we rename the fields used in Component say isLiked to isSelected, then it breaks the application.
  - If alias are defined are used in the view, renaming the fields doesn't affect the view.
  - But alias must not be renamed.

4. Alias are optional
5. If we define alias then we must use them only in the view.
*/


/*
Output Property

1. We need to create a Property that is a instance of EventEmitter, so that we can make the property a custom event. Ex: likeClick
2. The Property holds the instance of EventEmitter class. 
3. Inorder to make this custom event listenable from outside, so that it can be handled using Event Binding, we append Output() decorator. 
4. Append @Output() before 'likeClick' and assign it an instance of EventEmitter class.
5.'likeClick is now an object of EventEmitter and custom event. 
6. We need to emit the custom event from this components event handling method that handles predefined events like (click) i.e onClick()
*/

//We can also alias output property similar to input property



/*

My Understanding

1. Whenever click event happens, then onClick() method is called and executed. 
2. Once the onClick() method is executed, the custom event (likeClick) is emitted from this method. 
3. The subscriber of the likeClick event i.e App Component has to handle this custom event using a method.
4. In AppComponent onLikeClicked() is the event handling method that handles custom likeClick event. 


*/