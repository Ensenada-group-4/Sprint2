export const url = "http://localhost:3000/";

export default async function request({ method, endpoint, body }) {
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