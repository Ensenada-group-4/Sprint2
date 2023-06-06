import { url } from "./url";

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
    console.log(response);    
    response = await response.json();
    

    return response
}

