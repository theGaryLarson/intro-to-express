import { fetchOne } from './mongo_fetch.mjs'

// I'm a little confused on promises and how they are executed/resolved.
// My goal here is just to have the function called and it log the result
// from within the method call. It looks like this would do double duty but compiler
// telling me its required
fetchOne().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
})
