import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 2;
  dispComponents = [{type: 'Server', num: 1}];

  onBtnClick() {
    this.dispComponents.push({type: 'Server', num: this.num++})
  }


  onCompChanged(chngComp: { oldNo: number, newNo: number }) {
    let obj = this.dispComponents.find((o, i) => {
      if (o.num === chngComp.oldNo) {
        this.dispComponents[i].num = chngComp.newNo
        return true;
      }
    });
    // let indexOfNum = this.dispComponents.indexOf(chngComp.oldNo);
    // this.numComponents[indexOfNum] = chngComp.newNo;
  }

  onCompDeleted(num: number) {
    let obj = this.dispComponents.find((o, i) => {
      if (o.num === num) {
        this.dispComponents.splice(i, 1);
        return true;
      }
    });
    // let indexOfNum = this.numComponents.indexOf(num);
    // this.numComponents.splice(indexOfNum, 1);
  }
}


/* NOTES

1. Here if we use a normal numbers array and then push the numbers directly into the array, it works fine.

2. But when we change one of the numbers in the array (upon clicking the Change Component Number button), Angular considers the array has changed (state of array) thus it creates new instances of the components using the values in the changed array.

3. During ngOnChanges(), when we change the number, the SimpleChange object will always have previous value as undefined.

4. This is becoz Angular has created new instances of the component using the values in the changed array.

5. Therefore, when we use array of objects, and change the number, only the state of that particular object in the array which has the number gets changed, thus Angular only changes the values in those components, instead of creating new instance of the component with new values.
  - Here, the SimpleChange object will have previous value set to the previous value of the component.



*/