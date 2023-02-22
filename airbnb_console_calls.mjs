import { fetchOne } from './mongo_airbnb_api.mjs'
import {display_listing} from "./mongo_airbnb_api.mjs";
// I'm a little confused on promises and how they are executed/resolved.
// My goal here is just to have the function called, and it log the result
// from within the method call. It looks like this would do double duty but compiler
// telling me its required
fetchOne().then(data => {
    // question why do I have to do this when there is nothing there? (showing undefined)
    // answer: I should return the awaited response in the function..?
  // console.log(data);
}).catch(error => {
    console.error(error);
})

display_listing().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})
