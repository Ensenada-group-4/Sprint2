import React from 'react';

export const ButtonDefault = ({ content, id, type }) => {
    return (
        <button
            type={type}
            className="btn btn-warning btn-block"
            id="register-form-buttons"
        >
            {content}
        </button>
    )
}