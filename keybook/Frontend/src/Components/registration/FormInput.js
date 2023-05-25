import React from 'react';

export const FormInput = ({ label, type, name, onChange, value, placeholder }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="form-group ">
                    <label htmlFor={name}>{label}</label>
                    <input
                        value={value}
                        onChange={onChange}
                        name={name}
                        type={type}
                        className="form-control "
                        placeholder={placeholder}
                        required
                    />
                </div>
            </div>
        </div>
    )
}

