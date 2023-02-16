import {MONGO_API_KEY} from "./config.js";

export async function fetchOne() {
    try {

        const response = await fetch('https://data.mongodb-api.com/app/data-ryajg/endpoint/data/beta/action/findOne', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'omit', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'api-key': MONGO_API_KEY,
            },
            body: JSON.stringify({
                "collection": "listingsAndReviews",
                "database": "sample_airbnb",
                "dataSource": "Cluster0",
                "filter": {"property_type": "Apartment"},
                "projection": {"listing_url": 1, "name": 1, "summary": 1, "property_type": 1, "cancellation_policy": 1}
            })


        }); // ended this cutting of the promise .then and instead did below.
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

    // question what changes about promises when performing asynchronous calls?
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));

