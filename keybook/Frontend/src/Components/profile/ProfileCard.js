import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfileCard(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <div className="profile-details">
                        <div className="profile-info">
                            <h2 >{user.name} {user.last_name}</h2>                           
                            <div className="user-bio profile-data">
                                <img
                                    id="profile-avatar"
                                    src={user.profile_picture}
                                    alt="avatar"
                                    className="avatar"
                                />
                            </div>
                            <h5>Correo electrónico</h5>
                            <p>{user.email}</p>
                            <h5>TELÉFONO DE CONTACTO</h5>
                            <p>{user.phone}</p>
                        </div>
                        <div>
                            <h5 >Ciudad</h5>
                            <p>{user.city}</p>
                            <h5>País</h5>
                            <p>{user.country}</p>
                            <h5 >Año de nacimiento:</h5>
                            <p>{user.date_of_birth}</p>
                            <h5>Linkedin</h5>
                            <p>{user.linkedin}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfileCard;

