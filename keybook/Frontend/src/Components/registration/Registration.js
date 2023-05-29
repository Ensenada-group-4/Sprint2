import { useState } from "react";
import { Logo } from "../logo/Logo";
import request from "../../utils/url";
import { FormInput } from "./FormInput";
import { ButtonDefault } from "../ButtonDefault";

export default function Register() {
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
            alert("Error del servidor. Vuelva a intentarlo")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card"
                id="form-register"
            >
            <Logo className="form-logo" />
                <h1 className="new-user-registration">Registrar Nuevo Usuario</h1>
                {error && (
                    <div className="error form-control ">
                        La cuenta de correo ya está registrada
                    </div>
                )}
                <FormInput label="Nombre" type="text"
                    onChange={handleChange} value={userInfo.name} name="name" required />
                <FormInput label="Apellidos" type="text"
                    onChange={handleChange} value={userInfo.lastName} name="lastName" required />
                <FormInput label="Año de nacimiento" type="text"
                    onChange={handleChange} value={userInfo.dob} name="dob" required />
                <FormInput label="Ciudad" type="text"
                    onChange={handleChange} value={userInfo.city} name="city" required />
                <FormInput label="País" type="text"
                    onChange={handleChange} value={userInfo.country} name="country" required />
                <FormInput label="Teléfono" type="text"
                    onChange={handleChange} value={userInfo.phone} name="phone" required />
                <FormInput label="Linkedin" type="text"
                    onChange={handleChange} value={userInfo.linkedin} name="linkedin" />
                <FormInput label="Correo electrónico" type="email"
                    onChange={handleChange} value={userInfo.email} name="email" required />
                <FormInput label="Contraseña" type="password"
                    onChange={handleChange} value={userInfo.password} name="password" required />
                <FormInput label="Repita contraseña" type="password"
                    onChange={handleChange} value={userInfo.repeatPassword} name="repeatPassword" required />
                <ButtonDefault type="submit" content="Enviar" className="btn-lg"/>
            </form>
        </>
    );
}

