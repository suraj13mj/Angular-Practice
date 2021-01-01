import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styles : [
    `
    .btnColor {
      background-color : red;
    }
    `,
    `
    h1 {
      color : violet;
      background-color : yellow;
    }
    `
  ],
  encapsulation : ViewEncapsulation.None
})
export class SubscribeComponent {

}



/* 

1. Since ViewEncapsulation.None is set, btnColor style defined for <subscribe> is leaked across the HTML document.
2. For <comment> since we have used btnColor style class without defining for it separately.
3. btnColor style class of <subscribe> gets applied to <comment>
4. For <share> we have separately defined btnColor style class and that gets applied, even though btnColor of <subscribe> is leaked


5. For <comment> we have set ViewEncapsulation.Emulated, even then btnColor gets applied.
- Applying ViewEncapsulation.Emulated only means that its styles are not leaked to other components.
- But styles leaked from other components can get applied to it.

6. For <share> and <comment> component ViewEncapsulation is set to Emulated. For <subscribe> it is set to None.
- Therefore <subscribe> is leaking the styles.
- In <subscribe> we have defined the style for h1 element
- h1 element is being used in all three <share> <subscribe> <comment>
- But in <share> and <subscribe> we have not explicitly defined the styles for h1
- Therefore the leaked style of h1 from <subscribe> gets applied to all three h1's
*/