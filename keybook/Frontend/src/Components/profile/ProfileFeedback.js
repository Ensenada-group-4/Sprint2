import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfileHobbies(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div class="default-card">
                    <h4>
                        INTERESES y HOBBIS
                    </h4>
                    <ul class="profile-data">
                        <li>Listado de intereses</li>
                        <p>{user.hobby_name}</p>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileFeedback;