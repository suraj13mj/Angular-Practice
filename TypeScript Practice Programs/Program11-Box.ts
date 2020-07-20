export class Box {

    constructor(private _length?:number, private _breadth?:number, private _height?:number){
    }

    get length(){                                                   
        return this._length;
    }

    set length(value){                                     
        if(value<0){
            throw new Error("Value cannot be 0.");
        }
        this._length = value;
    }

    get breadth(){
        return this._breadth;
    }

    set breadth(value){
        if(value<0){
            throw new Error("Value cannot be 0.");
        }
        this._breadth = value;
    }

    get height(){
        return this._height;
    }

    set height(value){
        if(value<0){
            throw new Error("Value cannot be 0.");
        }
        this._height = value;
    }

    getVolume(){
        console.log("The Volume of the Box is "+ this._length * this._breadth * this._height);
    }
}


//Whenever a file has import or export keyword in the file then the Typescript considers it as a Module.
