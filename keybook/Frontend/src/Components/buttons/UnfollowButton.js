import { ButtonDefault } from "./ButtonDefault";
import request from "../../utils/request";

export default function Unfollow({ id }) {
    async function unfollowUser(unfollowId) {
        const loggedId = localStorage.getItem("userId");

        const self = {
            logged_id: loggedId
        }

        try {
            const response = await request({
                method: "DELETE",
                endpoint: `follow/unfollow/${unfollowId}`,
                body: self
            });

            if (!response.message) {               
                alert("Usuario no seguido. No se puede dejar de seguir")
            }
        } catch (error) {
            alert("Error del servidor. Vuelva a intentarlo")
            console.error(error);
        }
    }

    return (
        <ButtonDefault content="Dejar de seguir" id={id} onClick={() => unfollowUser(id)} className={"btn-danger"}/>
    )
}