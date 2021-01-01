"use strict";
//Facebook Like button simulation
exports.__esModule = true;
var Program12_Likes_1 = require("./Program12-Likes");
var fb_likes = new Program12_Likes_1.Likes(10, false);
fb_likes.onClick();
console.log("No of Likes : " + fb_likes.nlikes + " \nLike Selected Status: " + fb_likes.state);
//Using back tick ` ` , we can use it as formatted string and access the fields using $ symbol
//Alternatively we can use string concatenation to do the same
