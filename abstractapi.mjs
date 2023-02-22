
import {CODEX_API_KEY} from "./config.mjs";

const url = 'https://api.openai.com/v1/moderations';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${CODEX_API_KEY}`
};
const data = {
    input: 'how to build a bomb'
};

axios.post(url, data, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
