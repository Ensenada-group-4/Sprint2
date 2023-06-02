//Reusable input component for forms

export const FormInput = ({ label, type, name, onChange, value, placeholder, required }) => {
    return (
        <>
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
                        required={required} />
                </div>
            </div>
        </>
    )
}

