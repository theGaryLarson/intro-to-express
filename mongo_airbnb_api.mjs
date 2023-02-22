import {MONGO_API_KEY} from "./config.mjs";

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
        // commented this out after was working to just return the response
        // const data = await response.json();
        // console.log(data);
        // return data;
        return await response.json();

    } catch (error) {
        console.error(error);
    }
}

export async function display_listing() {
    const listing = await fetchOne();
    console.log("display listing tests");
    const doc = listing.document;

    // const listing_url = document.getElementById("url");
    // const name = document.getElementById("name");
    // const summary = document.getElementById("summary");
    // const property_type = document.getElementById("property_type");
    // const policy = document.getElementById("cancellation_policy");
    //
    // listing_url.innerHTML = doc.listing_url;
    // name.innerHTML = doc.name;
    // summary.innerHTML = doc.summary;
    // property_type.innerHTML = doc.property_type;
    // policy.innerHTML = doc.cancellation_policy;

    return doc.property_type;
}