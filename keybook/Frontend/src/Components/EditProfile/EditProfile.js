import { useState } from "react";
import request from "../../utils/url";
import { FormInput } from "../registration/FormInput";
import { ButtonDefault } from "../ButtonDefault";
import { TextArea } from "./TextArea";

export default function EditProfile() {
    const [userInfo, setUserInfo] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", linkedin: "", email: "", password: "", repeatPassword: "", education: "", tools: "", hobbies: "", languages: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        // setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, linkedin, email, password, repeatPassword, education, tools, hobbies, languages } = userInfo
        const id = 13

        console.log(userInfo)

        try {
            const response = await request({
                method: "PUT",
                endpoint: `users/${id}`,
                body: { name, lastName, dob, city, country, phone, linkedin, email, password, education, tools, hobbies, languages },
            });

            if (response.message) {
                alert("Usuario actualizado con éxito")
            } else {
                alert("FALLA ALGO")
                // setError(true);

            }
        } catch {
            alert("Ocurrió un error. Vuelva a intentarlo")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card "
                id="form-register"
            >
                <h1 className="new-user-registration">Editar perfil</h1>
                {/* {error && (
                    <div className="error form-control ">
                        La cuenta de correo ya está registrada
                    </div>
                )} */}
                <h3 className="space">Datos personales</h3>
                <FormInput label="Nombre" type="text"
                    onChange={handleChange} value={userInfo.name} name="name" />
                <FormInput label="Apellidos" type="text"
                    onChange={handleChange} value={userInfo.lastName} name="lastName" />
                <FormInput label="Año de nacimiento" type="text"
                    onChange={handleChange} value={userInfo.dob} name="dob" />
                <FormInput label="Ciudad" type="text"
                    onChange={handleChange} value={userInfo.city} name="city" />
                <FormInput label="País" type="text"
                    onChange={handleChange} value={userInfo.country} name="country" />
                <FormInput label="Teléfono" type="text"
                    onChange={handleChange} value={userInfo.phone} name="phone" />
                <FormInput label="Linkedin" type="text"
                    onChange={handleChange} value={userInfo.linkedin} name="linkedin" />

                <h3 className="space">Información adicional</h3>
                <TextArea title="Formación" placeholder="Curso - Fecha (Fullstack Bootcamp - 2023)"
                    onChange={handleChange} value={userInfo.education} name="education" />
                <TextArea title="Herramientas" placeholder="Herramienta - Nivel (CSS - Experto)"
                    onChange={handleChange} value={userInfo.tools} name="tools" />
                <TextArea title="Idiomas" placeholder="Idioma - Nivel (Inglés - B2)"
                    onChange={handleChange} value={userInfo.languages} name="languages" />
                <TextArea title="Hobbies" placeholder="Intereses (Cocinar, deporte...)"
                    onChange={handleChange} value={userInfo.hobbies} name="hobbies" />

                <h3 className="space">Actualizar contraseña</h3>
                <FormInput label="Contraseña" type="password"
                    onChange={handleChange} value={userInfo.password} name="password" />
                <FormInput label="Repita contraseña" type="password"
                    onChange={handleChange} value={userInfo.repeatPassword} name="repeatPassword" />
                <ButtonDefault type="submit" content="Enviar" />
            </form>
        </>
    );
}