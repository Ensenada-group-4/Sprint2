// import { EditProfileForm } from "./EditProfileForm";
import { TextArea } from "./TextArea";

export default function EditProfile() {
    return (
        <>
            <div class="container-fluid main-structure">
                <div class="row">         
                    <TextArea title="Formación" placeholder="Curso - Fecha (Fullstack Bootcamp - 2023)" />
                    <TextArea title="Herramientas" placeholder="Herramienta - Nivel (CSS - Experto)" />                    
                    <TextArea title="Idiomas" placeholder="Idioma - Nivel (Inglés - B2)" />                  
                    <TextArea title="Hobbies" placeholder="Intereses (Cocinar, deporte...)" />
                    {/* <EditProfileForm title="Datos personales" /> */}
                </div>
            </div>
        </>
    );
}

