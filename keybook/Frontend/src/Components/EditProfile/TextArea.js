export const TextArea = ({ title, error, onChange, value, name, placeholder }) => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="form-group ">
                        <div style={{ textAlign: "center" }}>
                            <h3>{title}</h3>
                            <textarea onChange={onChange} value={value} name={name} placeholder={placeholder} rows="4"></textarea>
                            {error && (
                                <div className="error form-control ">
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
