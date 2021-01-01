export class Likes {
    constructor(private _nlikes:number, private _state:boolean){
    }

    onClick(){
        if(this._state){
            this._nlikes--;
            this._state = false;
        }
        else{
            this._nlikes++;
            this._state = true;
        }
    }

    /* or
    onClick(){
        if(this._state){
            this._nlikes--;
        }
        else{
            this._nlikes++;
        }
        
        this._state = !this._state;
    }
    */

    /* or 
    onClick(){
        this._nlikes += (this._state) ? -1 : +1; 
        this._state = !this._state;
    }
    */
    

    get nlikes(){
        return this._nlikes;
    }

    get state(){
        return this._state;
    }

}