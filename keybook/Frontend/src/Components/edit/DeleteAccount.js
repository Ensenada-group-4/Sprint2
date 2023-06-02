import request from "../../utils/url";
import { ButtonDefault } from "../buttons/ButtonDefault";

export default function DeleteAccount() {
    async function handleDelete(e) {
        e.preventDefault();
        const id = localStorage.getItem('userId');

        if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
            try {
                const response = await request({
                    method: "DELETE",
                    endpoint: `users/delete/${id}`,
                })
                if (response.message) {
                    localStorage.removeItem('userId')
                    localStorage.removeItem('token')
                    alert("Cuenta borrada. Te echaremos de menos 😔")
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1000)
                } else {
                    alert("Se produjo un error. Vuelva a intentarlo")
                }
            } catch {
                alert("Error del servidor. Vuelva a intentarlo")
                console.error(error);
            }
        }
    }

    return (
        <ButtonDefault onClick={handleDelete} type="submit" className="btn btn-danger" content="Borrar cuenta"/>        
    )
}