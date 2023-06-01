import React from 'react';

export default function validations() {

    const alphaRegex = /^[A-zÀ-ÿ ]+$/;
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }

    if (!alphaRegex.test(keys.name)) {
        alert("Nombre sólo puede contener letras")
    }  

    if (isNaN(keys.dob) || keys.dob.length != 4) {
        alert("Año de nacimiento debe ser una cifra de 4 letras")
    }      

    if (isNaN(keys.phone)) {
        alert("Teléfono sólo puede contener números")
    }

    if (!passwordRegex.test(keys.password)) {
        alert("La contraseña debe tener al menos 8 caracteres e incluir minúsculas, mayúsculas y números")
    }

    if (keys.password !== keys.repeatPassword) {
        alert("Las contraseñas deben coincidir")
    }
}