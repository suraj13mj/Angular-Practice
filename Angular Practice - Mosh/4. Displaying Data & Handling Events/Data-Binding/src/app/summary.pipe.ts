import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform {

    // transform(value : string, args ?: any){          //args (different options that we can define) is a optional parameter 
    //         if(!value)
    //             return null
    //         return value.substr(0,40);
    // }

    transform(value : string, noOfChars ?: number){
        if(!value)
            return null
        length = (noOfChars) ? noOfChars : 50; 
        return value.substr(0,length);
    }
}


/*
1. Inorder to define Custom Pipes we need to import 'Pipe' decorator function & 'PipeTransform' interface.
2. In TS class SummaryPipe must implement this PipeTransform interface i.e it must define the transform function.
3. Next we need to define the Pipe decorator function.
4. This transform() function takes 1. Value parameter i.e Data 2. Arguments i.e different options passed as parameters. 

- We need to register this SummaryPipe in the declarations of app.module.ts
- Naming convention of Pipe file : 'pipename.pipe.ts'
*/