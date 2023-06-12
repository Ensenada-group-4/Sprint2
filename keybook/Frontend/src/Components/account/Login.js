import { useState } from "react";
import userRequest from "../../utils/userRequest";
import { Logo } from "../logo/Logo";
import { FormInput } from "./FormInput";
import { ButtonDefault } from "../buttons/ButtonDefault";
import GrayScaleButton from "../navbar/GrayScaleButton";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
    setError(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = loginInfo;

    try {
      const response = await userRequest({
        method: "POST",
        endpoint: "users/auth",
        body: { email, password },
      });
      if (response.id) {
        localStorage.setItem("userId", response.id);
        localStorage.setItem("token", response.token);
        localStorage.setItem("role", response.role);

        window.location.href = "/home";
      } else {
        setError(true);
      }
    } catch {
      alert("Error del servidor. Vuelva a intentarlo más tarde.");
    }
  }

  return (
    <>
      <div className="container-fluid main-structure min-vh-100">
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
              <GrayScaleButton className="dropdown-item" />
              <form onSubmit={handleSubmit}>
                <FormInput
                  type="email"
                  onChange={handleChange}
                  value={loginInfo.email}
                  name="email"
                  placeholder="Email"
                  required
                />
                <FormInput
                  type="password"
                  onChange={handleChange}
                  value={loginInfo.password}
                  name="password"
                  placeholder="Contraseña"
                  required
                />
                {error && (
                  <div className="error form-control">
                    {" "}
                    Usuario o contraseña incorrectos{" "}
                  </div>
                )}
                {success && (
                  <div className="success col-md-8  form-control ">
                    Usuario correcto ✔ Redireccionando a Home
                  </div>
                )}
                <ButtonDefault
                  type="submit"
                  content="Login"
                  id="register-form-buttons"
                  className="btn-lg"
                />
                <div className="d-flex justify-content-center">
                  <p className="slogan-container">
                    Si no tienes cuenta <a href="/register">Registrate</a>
                  </p>                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
