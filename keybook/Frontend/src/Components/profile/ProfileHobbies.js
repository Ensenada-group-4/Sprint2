import React, { useState, useEffect } from 'react';

function ProfileHobbies(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h4>
                        INTERESES y HOBBIS
                    </h4>
                    <ul className="profile-data">
                        <li>Listado de intereses</li>
                        <p>{user.hobby_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileHobbies;