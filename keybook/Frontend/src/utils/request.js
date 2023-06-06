import { url } from "./url";

export default async function request({ method, endpoint, body }) {
    const token = localStorage.getItem("token");
    let response = await fetch(url + endpoint, {
        method: method.toUpperCase(),
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });   
    response = await response.json();

    return response
}