
async function getDogFact() {
    const api_endpoint = "https://dog-api.kinduff.com/api/facts?number=1"
    const response = await fetch(api_endpoint);
    const json_response = await response.json();
    // const fact = json_response[0];
    console.log(json_response.facts[0]);
    return json_response.facts[0];
}

async function display_dog_fact() {
    const dogFact = await getDogFact();
    const dogFactPTag = document.getElementById("dogFact");
    console.log(dogFactPTag);
    dogFactPTag.innerHTML = dogFact;
}

