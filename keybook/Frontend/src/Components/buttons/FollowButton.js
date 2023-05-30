import { ButtonDefault } from "./ButtonDefault";
import request from "../../utils/url";

export default function Follow({ id }) {
    async function followUser(followId) {
        const loggedId = localStorage.getItem("userId");

        const self = {
            logged_id: loggedId
        }

        try {
            const response = await request({
                method: "POST",
                endpoint: `follow/${followId}`,
                body: self
            });

            if (response.friendship_id) {
                alert("Siguiendo usuario")
            } else {
                alert("Usuario ya seguido. No se puede volver a seguir")
            }
        } catch (error) {
            alert("Error del servidor. Vuelva a intentarlo")
            console.error(error);
        }
    }

    return (
        <ButtonDefault content="Seguir" id={id} onClick={() => followUser(id)} />
    )
}