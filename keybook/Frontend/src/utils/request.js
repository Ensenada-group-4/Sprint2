import { url } from "./url";

//Reusable function for API requests different from GET method, including the jwt in the headers

export default async function request({ method, endpoint, body }) {
    const token = localStorage.getItem("token");
    let response = await fetch(url + endpoint, {
        method: method.toUpperCase(),
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(body),
    });
    response = await response.json();

    return response
}

