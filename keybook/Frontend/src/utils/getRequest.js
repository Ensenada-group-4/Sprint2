import { url } from "./url";

//Reusable function for API for GET requests ONLY, including the jwt in the headers

export default async function getRequest({ endpoint }) {
    const token = localStorage.getItem("token");
    let response = await fetch(url + endpoint, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    response = await response.json();

    return response
}