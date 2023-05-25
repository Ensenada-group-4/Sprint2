import { useState } from "react";
import request from "../../utils/url";
import { EditProfileForm } from "./EditProfileForm";

export default function EditLanguage() {
    const [language, setLanguage] = useState("");
    // const [error, setError] = useState(false);

    function handleChange(e) {
        setLanguage(e.target.value);
        // setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const id = 6;
        // const id = localStorage.getItem('userId');
        try {
            const response = await fetch(`http://localhost:3000/languages/${id}`)
            const existingLanguage = await response.json()
            if (existingLanguage.length > 0) {
                const updateLanguage = await request({
                    method: "PUT",
                    endpoint: `languages/${id}`,
                    body: { language },
                });
                if (updateLanguage.message) {
                    alert("Idioma agregado con éxito")
                } else {
                    alert("Error")
                }

            } else {
                const setLanguage = await request({
                    method: "POST",
                    endpoint: `languages/${id}`,
                    body: { language },
                });
                if (setLanguage.message) {
                    alert("Idioma agregado con éxito")
                } else {
                    alert("Error")
                }
            }
        } catch {
            alert("Ocurrió un error. Vuelva a intentarlo")
        }
    }

    return (
        <>
            <EditProfileForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                value={language}             
                title="Idiomas"
                placeholder="Idioma - Nivel (Inglés - B2)"
            // error="Ocurrió un error. Vuelva a intentarlo"
            />
        </>
    )
}
