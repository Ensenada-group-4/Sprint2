import { useState } from "react";
import request from "../../utils/url";
import { FormInput } from "../FormInput";
import { EditProfileForm } from "./EditProfileForm";

const education = [<FormInput placeholder="Academia" />, <FormInput placeholder="Curso" />]
const languages = [<FormInput placeholder="Idioma" />, <FormInput placeholder="Nivel" />]
const hobbies = [<FormInput placeholder="Hobby" />, <FormInput placeholder="Hobby" />]
const tools = [<FormInput placeholder="Academia" />, <FormInput placeholder="Curso" />]
const personalDetails = [<FormInput placeholder="Nombre"
    type="text"
    name="name" />,
<FormInput placeholder="Apellidos"
    type="text"
    name="lastName" />,
<FormInput placeholder="Año de nacimiento"
    type="text"
    name="dob" />,
<FormInput placeholder="Ciudad"
    type="text"
    name="city" />,
<FormInput placeholder="País"
    type="text"
    name="country" />]
const contactDetails = [<FormInput placeholder="Teléfono"
/>,
<FormInput placeholder="Correo electrónico" />
    ,
<FormInput placeholder="Linkdin"
/>]

const changePassword = [<FormInput placeholder="Contraseña"
    type="password"
    name="password" />,
<FormInput placeholder="Repita contraseña"
    type="password"
    name="repeatPassword" />
]

export default function EditProfile() {
    return (
        <>
            <div class="container-fluid main-structure">
                <div class="row">
                    <EditProfileForm title="Formación" inputArray={education} />
                    <EditProfileForm title="Herramientas" inputArray={tools} />
                    <EditProfileForm title="Idiomas" inputArray={languages} />
                    <EditProfileForm title="Hobbies" inputArray={hobbies} />
                    <EditProfileForm title="Datos personales" inputArray={personalDetails}
                    />
                    <EditProfileForm title="Datos de contacto" inputArray={contactDetails}
                    />
                    <EditProfileForm title="Cambiar contraseña" inputArray={changePassword}
                    />


                </div>
            </div>
        </>
    );
}

