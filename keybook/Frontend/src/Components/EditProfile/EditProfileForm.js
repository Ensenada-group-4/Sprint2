import { ButtonDefault } from "../ButtonDefault";

export const EditProfileForm = ({ title, onSubmit, error, onChange, value, placeholder }) => {
    return (
        <>
            <div class="col-sm-5 col-md-4 col-lg-3">
                <form
                    className="default-card" style={{ textAlign: "center" }}
                    onSubmit={onSubmit}
                >
                    <h3>{title}</h3>
                    <textarea onChange={onChange}  value={value} placeholder={placeholder} rows="5"></textarea>
                    {error && (
                        <div className="error form-control ">
                            {error}
                        </div>
                    )}
                    <ButtonDefault type="submit" content="Actualizar" />
                </form>
            </div>
        </>
    );
}



