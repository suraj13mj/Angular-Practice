"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Likes = void 0;
var Likes = /** @class */ (function () {
    function Likes(_nlikes, _state) {
        this._nlikes = _nlikes;
        this._state = _state;
    }
    Likes.prototype.onClick = function () {
        if (this._state) {
            this._nlikes--;
            this._state = false;
        }
        else {
            this._nlikes++;
            this._state = true;
        }
    };
    Object.defineProperty(Likes.prototype, "nlikes", {
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
        get: function () {
            return this._nlikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Likes.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    return Likes;
}());
exports.Likes = Likes;
