import { useState } from "react";
import { ButtonDefault } from "../ButtonDefault";

export const EditProfileForm = ({ title, inputArray = [{ component }] }) => {
    return (
        <>
            <div class="col-sm-5 col-md-4 col-lg-3">
                <form
                    className="default-card" style={{ textAlign: "center" }}
                >
                    <h3>{title}</h3>
                    {inputArray}
                    <ButtonDefault type="submit" content="Actualizar" />
                </form>
            </div>
        </>
    );
}



