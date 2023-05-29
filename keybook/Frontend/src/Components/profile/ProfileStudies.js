import React, { useState, useEffect } from 'react';

function ProfileStudies(props) {
    const { user } = props;

    return (
        <>
            {user && (
                <div className="default-card">
                    <h4>
                        FORMACION
                    </h4>
                    <ul className="profile-data">
                        <a id="formacion">
                            <p>Títulación</p>
                            <p>{user.studies_course}</p>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileStudies;