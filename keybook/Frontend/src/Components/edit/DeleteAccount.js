import request from "../../utils/url";

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
                    alert("Cuenta borrada. Te echaremos de menos 😔")
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000)
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
        <btn onClick={handleDelete} type="submit" className="btn btn-danger">Borrar cuenta</btn>
    )
}