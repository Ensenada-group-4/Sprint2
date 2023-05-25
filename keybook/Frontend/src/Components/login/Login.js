import { useState } from "react";
import request from "../../utils/url";
import logo from '../../imgs/logo.png';
import { FormInput } from "../registration/FormInput";
import { ButtonDefault } from "../ButtonDefault";
function MyLogo() {
    return (
        <img src={logo} alt="Keybook logo" id="main-logo" />
    );
}
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
            alert("Ocurrió un error")
            setError(true);
        }
    }
    return (
        <>
            <div className="container login-container">
                <div className="card">
                    {MyLogo()}
                    <div id="slogan-container">
                        <h2>Keybook: donde los programadores comparten sus claves</h2>
                    </div>
                </div>
                <div id="login-form" >
                    <div className="d-flex justify-content-center h-100 login-container">
                        <div className="card">
                            <div className="card-header">
                                <h1>Incio de Sesión</h1>
                            </div>
                            {error && (
                                <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                                    Usuario o contraseña incorrectos
                                </div>
                            )}
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <FormInput
                                        type="email"
                                        onChange={handleChange} value={loginInfo.email} name="email" placeholder="Email" />
                                    <FormInput
                                        type="password"
                                        onChange={handleChange} value={loginInfo.password} name="password" placeholder="Contraseña" />
                                    <ButtonDefault type="submit" content="Login" id="register-form-buttons" />
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-center links">
                                                    Si no tienes cuenta
                                                    <a href="./formRegistration.html">Registrate</a>
                                                </div>
                                                {/* <div className="d-flex justify-content-center">
                                                    <a href="./formResetPassword.html">
                                                        ¿Olvidaste tu contraseña?
                                                    </a>
                                                </div> */}
                                                {/* <div className="infinity-button" onclick="toggleGrayScale()">
                                            <i className="fa fa-infinity icon" title="Blanco y Negro" />
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}