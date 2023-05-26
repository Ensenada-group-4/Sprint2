import request from "../../utils/url";

export default function DeleteAccount() {
    async function handleDelete(e) {
        e.preventDefault();
        const id = 6
        // const id = localStorage.getItem('userId');

        if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
            try {
                const response = await request({
                    method: "DELETE",
                    endpoint: `users/delete/${id}`,
                })
                if (response.message) {
                    localStorage.removeItem('userId')
                    alert("Cuenta borrada. Te echaremos de menos 😔")
                    setTimeout(() => {
                        window.location.href = "/login"                      
                    }, 3000)
                } else {
                    alert("Se produjo un error.")                   
                }
            } catch {
                alert("Ocurrió un error. Vuelva a intentarlo")
            }
        }
    }

    return (
        <btn onClick={handleDelete} type="submit" className="btn btn-danger">Borrar cuenta</btn>
    )
}