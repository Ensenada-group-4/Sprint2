import { url } from "./url";

export default async function userRequest({ method, endpoint, body }) {
    let response = await fetch(url + endpoint, {
        method: method.toUpperCase(),
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body),
    });
    response = await response.json();

    return response
}
