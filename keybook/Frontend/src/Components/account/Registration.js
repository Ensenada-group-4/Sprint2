import { useState } from "react";
import { Logo } from "../logo/Logo";
import userRequest from "../../utils/userRequest";
import { FormInput } from "./FormInput";
import { ButtonDefault } from "../buttons/ButtonDefault";
import GrayScaleButton from "../navbar/GrayScaleButton";

//Regex for password security
const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

export default function Register() {
    const [userInfo, setUserInfo] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", linkedin: "", email: "", password: "", repeatPassword: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        setError("");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, linkedin, email, password, repeatPassword } = userInfo

        // Input validations
        if (!passwordRegex.test(password)) {
            setError("La contraseña debe tener al menos 8 caracteres e incluir minúsculas, mayúsculas y números")
        } else if (password !== repeatPassword) {
            setError("Las contraseñas deben coincidir")
        } else if (isNaN(dob) || dob.length != 4) {
            setError("Año de nacimiento debe ser un número de cuatro cifras")
        } else {
            
            try {
                const response = await userRequest({
                    method: "POST",
                    endpoint: "users/register",
                    body: { name, lastName, dob, city, country, phone, linkedin, email, password },
                });

                if (response.id) {
                    setSuccess(true);
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1000)
                } else {
                    setError("Email ya registrado");
                }
            } catch {
                alert("Error del servidor. Vuelva a intentarlo")
                console.error(error);
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card"
                id="form-register">
                <Logo className="form-logo" />
                <h1 className="new-user-registration">Registrar Nuevo Usuario</h1>
                <GrayScaleButton className="dropdown-item"/>
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
                {error && (<div className="error col-md-8 form-control "> {error} </div>)}
                {success && <div className="success col-md-8  form-control ">Cuenta creada con éxito ✔ Redireccionando a login</div>}
                <ButtonDefault type="submit" content="Enviar" className="btn-lg" />
            </form>
        </>
    );
}

