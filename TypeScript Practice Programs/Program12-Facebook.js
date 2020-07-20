"use strict";
//Facebook Like button simulation
Object.defineProperty(exports, "__esModule", { value: true });
var Program12_Likes_1 = require("./Program12-Likes");
var fb_likes = new Program12_Likes_1.Likes(10, false);
fb_likes.onClick();
console.log("No of Likes : " + fb_likes.nlikes + " \nLike Selected Status: " + fb_likes.state);
