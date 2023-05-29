import React, { useState, useEffect } from 'react';

function ProfileLanguajes(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h4>
                        IDIOMAS
                    </h4>
                    <ul className="profile-data">
                        <a>
                            Idioma
                            <p>{user.language_name}</p>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileLanguajes;