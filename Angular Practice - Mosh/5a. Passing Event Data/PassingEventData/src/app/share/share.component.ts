import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'share',
  templateUrl: './share.component.html',
  styles : [
    `
    .btnColor {
      background-color : green;
    }
    `
  ],
  encapsulation : ViewEncapsulation.Emulated
})
export class ShareComponent  {
}



/*
Shadow DOM Concept

1. In Angular the styles that are defined for each component, get applied to component only.
2. They do not leak to other Components that have same style class defined.
3. This is because of a Concept called Shadow DOM provided by the Browsers, which scopes the styles only to a particular element.
4. Without applying them / leaking them in the entire html document.

    <share></share>

    //Simulation (Internal) of Encapsulation set to None
Ex: var ele = document.querySelector('share');
    ele.innerHTML = `
      <style> .h1 {color : red} </style>
      <h1> Hello </h1>\
    `
    Here color red is not only applied within <share></share>, but is applied everywhere h1 is used

Ex: Shadow DOM method 

    //Simulation (Internal) of Encapsulation set to Encapsulated/ShadowDOM
    var ele = document.querySelector('share');
    var root = ele.createShadowRoot();
    root.innerHTML = `
      <style> .h1 {color : red} </style>
      <h1> Hello </h1>\
    `

    Here color red is applied to h1 tags only in <share></share>


5. In @Component decorator, there is a property called encapsulation, which can be used to define Shadow DOM
6. We set this Property to the value of ViewEncapsulation enum
7. This ViewEncapsulation enum has 3 constansts

- ViewEncapsulation.Emulated : This specifies Angular creates it own emulation to enable shadow DOM feature.
- ViewEncapsulation.ShadowDOM (Native) : This specifies to use shadowDOM supported/provided by Browser
- ViewEncapsulation.None : This specified not to use shadowDOM i.e styles are leaked to entire html document

8. In Angular, Emulated is enabled by default

9. We can observe in Elements tab of Developer tools, wherein Angular used dynamic generated tags (Ex: _ngcontent-kur-c13) to 
  shadowDOM the styles i.e to prevent leaking of styles.


* MAX Notes:

1. For each component, html elements present in the template of that component, an attribute gets added (Ex: _ngcontent-set-c40)
2. All the html elements in a particular component, have same attribute.
3. Elements present in  different components have different attribute. 
4. Using this special attribute Angular emulates the feature of ShadowDOM, thus applying styles to only a particular componet. 
5. If the encapsulation is set to None or Native, then these attributes are not added to the html elements. 

*/