import { useState } from "react";
import request from "../../utils/url";
import { FormInput } from "../registration/FormInput";
import { ButtonDefault } from "../ButtonDefault";
import { TextArea } from "./TextArea";

export default function EditProfile() {
    const [userInfo, setUserInfo] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", email: "", password: "", repeatPassword: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, email, password, repeatPassword } = userInfo

        try {
            const response = await request({
                method: "POST",
                endpoint: "users/register",
                body: { name, lastName, dob, city, country, phone, email, password },
            });

            if (response.id) {
                alert("Usuario creado con éxito")
            } else {
                setError(true);
            }
        } catch {
            alert("Ocurrió un error. Vuelva a intentarlo")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card"
                id="form-register"
            >
                <h1 className="new-user-registration">Registrar Nuevo Usuario</h1>
                {error && (
                    <div className="error form-control ">
                        La cuenta de correo ya está registrada
                    </div>
                )}
                <FormInput label="Nombre"
                    type="text"
                    onChange={handleChange} value={userInfo.name} name="name" />
                <FormInput label="Apellidos"
                    type="text"
                    onChange={handleChange} value={userInfo.lastName} name="lastName" />
                <FormInput label="Año de nacimiento"
                    type="text"
                    onChange={handleChange} value={userInfo.dob} name="dob" />
                <FormInput label="Ciudad"
                    type="text"
                    onChange={handleChange} value={userInfo.city} name="city" />
                <FormInput label="País"
                    type="text"
                    onChange={handleChange} value={userInfo.country} name="country" />
                <FormInput label="Teléfono"
                    type="text"
                    onChange={handleChange} value={userInfo.phone} name="phone" />
                <FormInput label="Correo electrónico"
                    type="email"
                    onChange={handleChange} value={userInfo.email} name="email" />
                <FormInput label="Contraseña"
                    type="password"
                    onChange={handleChange} value={userInfo.password} name="password" />
                <FormInput label="Repita contraseña"
                    type="password"
                    onChange={handleChange} value={userInfo.repeatPassword} name="repeatPassword" />
                <TextArea title="Formación" onChange={handleChange} value={userInfo.education} name="education" placeholder="Curso - Fecha (Fullstack Bootcamp - 2023)" />
                <TextArea title="Herramientas" onChange={handleChange} value={userInfo.tools} name="tools" placeholder="Herramienta - Nivel (CSS - Experto)" />
                <TextArea title="Idiomas" onChange={handleChange} value={userInfo.languages} name="languages" placeholder="Idioma - Nivel (Inglés - B2)" />
                <TextArea title="Hobbies" onChange={handleChange} value={userInfo.hobbies} name="hobbies" placeholder="Intereses (Cocinar, deporte...)" />
                <ButtonDefault type="submit" content="Enviar" />
            </form>
        </>
    );
}