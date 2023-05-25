import { EditProfileForm } from "./EditProfileForm";
import EditLanguage from "./EditLanguage";

export default function EditProfile() {
    return (
        <>
            <div class="container-fluid main-structure">
                <div class="row">
                    <EditProfileForm title="Formación" placeholder="Curso - Fecha (Fullstack Bootcamp - 2023)" />
                    <EditProfileForm title="Herramientas" placeholder="Herramienta - Nivel (CSS - Experto)" />
                    <EditLanguage/>
                    {/* <EditProfileForm title="Idiomas" placeholder="Idioma - Nivel (Inglés - B2)" />                   */}
                    <EditProfileForm title="Hobbies" placeholder="Intereses (Cocinar, deporte...)" />
                    {/* <EditProfileForm title="Datos personales" /> */}
                </div>
            </div>
        </>
    );
}

