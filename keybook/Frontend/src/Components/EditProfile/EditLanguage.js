import { useState } from "react";
import { EditProfileForm } from "./EditProfileForm";

export default function EditLanguage() {
    const [language, setLanguage] = useState("");
    // const [error, setError] = useState(false);

    function handleChange(e) {
        setLanguage(e.target.value );
        // setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        alert("holi")
        // try {
        //     const response = await request({
        //         method: "PUT",
        //         endpoint: "languages",
        //         body: { language },
        //     });

        //     if (response.id) {
        //         alert("Idiomas actualizados con éxito")
        //     }
        //     // else {
        //     //     setError(true);
        //     // }
        // } catch {
        //     alert("Error con el servidor. Vuelva a intentarlo")
        // }
    }


    return (
        <>
            <EditProfileForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                value={language}
                // name="language"
                title="Idiomas"
                placeholder="Idioma - Nivel (Inglés - B2)"
            // error="Ocurrió un error. Vuelva a intentarlo"
            />
        </>
    )
}