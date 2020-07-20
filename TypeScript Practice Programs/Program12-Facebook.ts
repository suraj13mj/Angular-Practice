//Facebook Like button simulation

import {Likes} from "./Program12-Likes";

let fb_likes = new Likes(10,false);

fb_likes.onClick();

console.log(`No of Likes : ${fb_likes.nlikes} \nLike Selected Status: ${fb_likes.state}`);

