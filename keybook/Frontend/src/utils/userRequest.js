import { url } from "./url";

//Reusable function for API requests for login and register ONLY , without a jwt in the headers

export default async function userRequest({ method, endpoint, body }) {
    let response = await fetch(url + endpoint, {
        method: method.toUpperCase(),
        headers: {
            "content-type": "application/json",            
        },
        body: JSON.stringify(body),
    });
    response = await response.json();

    return response
}
