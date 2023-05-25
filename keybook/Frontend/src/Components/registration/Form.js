import { useState } from "react";
import { ButtonDefault } from "../ButtonDefault";

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
    name="country" />,
<FormInput placeholder="Teléfono"
    type="text"
    name="phone" />,
<FormInput placeholder="Correo electrónico"
    type="email"
    name="email" />,
<FormInput placeholder="Contraseña"
    type="password"
    name="password" />,
<FormInput placeholder="Repita contraseña"
    type="password"
    name="repeatPassword" />]

export const EditProfileForm = ({ title, inputArray = [{ component }] }) => {
    return (
        <>
            <div class="col-sm-5 col-md-4 col-lg-3">
                <form
                    className="default-card" style={{ textAlign: "center" }}
                >
                    <h3>{title}</h3>
                    {personalDetails}
                    <ButtonDefault type="submit" content="Actualizar" />
                </form>
            </div>
        </>
    );
}

