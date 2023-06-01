import { useState } from "react";
import request from "../../utils/url";
import { Logo } from "../logo/Logo";
import { FormInput } from "../registration/FormInput";
import { ButtonDefault } from "../buttons/ButtonDefault";

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const [error, setError] = useState(false);
    function handleChange(e) {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
        setError(false);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = loginInfo;

        try {
            const response = await request({
                method: "POST",
                endpoint: "users/auth",
                body: { email, password },
            });
            if (response.id) {
                alert("Usuario logueado con éxito. Redireccionando a home")
                localStorage.setItem('userId', response.id);
                localStorage.setItem("token", response.token)
                window.location.href = "/home";
            } else {
                setError(true);
            }
        } catch {
            alert("Error del servidor. Vuelva a intentarlo")
            console.error(error);
        }
    }
    return (
        <>
            <div className="container-fluid main-structure">
                <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-6">
                        <div className="default-card welcome-card">
                            <Logo className="main-logo" />
                            <div className="slogan-container">
                                <h2>Keybook: donde los programadores comparten sus claves</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-6 col-lg-6">
                        <div className="default-card welcome-card ">
                            <h1>Inicio de Sesión</h1>
                            {error && (
                                <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                                    Usuario o contraseña incorrectos
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <FormInput
                                    type="email"
                                    onChange={handleChange} value={loginInfo.email} name="email" placeholder="Email" required />
                                <FormInput
                                    type="password"
                                    onChange={handleChange} value={loginInfo.password} name="password" placeholder="Contraseña" required />
                                <ButtonDefault type="submit" content="Login" id="register-form-buttons" className="btn-lg" />

                                <div className="d-flex justify-content-center">
                                    <p className="slogan-container">Si no tienes cuenta <a href="/register">Registrate</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}