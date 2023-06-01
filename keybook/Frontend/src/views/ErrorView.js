import Footer from "../Components/footer/Footer";

export default function ErrorView() {
    return (
        <>
            <div className="min-vh-100">
                <div class="default-card error-card">
                    <h1>Error 404: Oops... Page Not Found</h1>
                    <a href="/"><h3>Página de inicio</h3></a>
                </div>
            </div>
            <Footer />
        </>
    );
}