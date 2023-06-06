import React, { useState, useEffect } from "react";
import getRequest from '../../utils/getRequest';

export default function LoggedInfo() {
    const [logged, setLogged] = useState({});

    useEffect(() => {
        const getLoggedUser = async () => {
            const userId = localStorage.getItem("userId");
            try {               
                const response = await getRequest({
                    endpoint: `users/user/${userId}`
                  })                   
                setLogged(response)                
            } catch (error) {
                alert("Error de servidor")
                console.error(error)
            }
        }
        getLoggedUser()
    }, []);

    return (
        <>
            <div className="default-card profile-index">
                <a title="Mi perfil" href={`/profile/${logged.id}`}>
                    <img src={logged.profile_picture}  className="avatar-perfil"/></a>
                <h3>{logged.name} {logged.last_name}</h3>
            </div>
        </>
    )
}

