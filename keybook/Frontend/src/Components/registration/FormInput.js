import React from 'react';

export const FormInput = ({ label, type, name, onChange, value, placeholder }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <label className="space" htmlFor={name}>{label}</label>
                <input
                    value={value}
                    onChange={onChange}
                    name={name}
                    type={type}
                    className="form-control "
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

