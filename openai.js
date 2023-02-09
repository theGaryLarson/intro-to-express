
import {CODEX_API_KEY} from "./config.js";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-NTmosZUvFm5cTBskOmgbX4Ln",
    apiKey: CODEX_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listModels();