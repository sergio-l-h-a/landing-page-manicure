import '../styles/services.css';

export default function Services() {
    return(
        <section id="services" className="services">
            <h2>Serviços</h2>

            <div className="services-grid">
                <div className="services-card">
                    <h3>Manicure</h3>
                    <p>Cuidados completos para suas mãos e unhas.</p>
                </div>

                <div className="services-card">
                    <h3>Pedicure</h3>
                    <p>Trataento relaxante e estético para seus pés.</p>
                </div>

                <div className="services-card">
                    <h3>Alongamento em Gel</h3>
                    <p>Unhas resistentes, bonitas e duradouras.</p>
                </div>
            </div>
        </section>
    );
}