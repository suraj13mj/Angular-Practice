//Facebook Like button simulation

import {Likes} from "./Program12-Likes";

let fb_likes = new Likes(10,false);

fb_likes.onClick();

console.log(`No of Likes : ${fb_likes.nlikes} \nLike Selected Status: ${fb_likes.state}`);

//Using back tick ` ` , we can use it as formatted string and access the fields using $ symbol
//Alternatively we can use string concatenation to do the same