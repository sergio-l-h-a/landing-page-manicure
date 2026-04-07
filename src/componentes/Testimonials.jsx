import '../styles/testimonials.css';

export default function Testimonials() {
    return(
        <section id="testimonials" className="testimonials">
            <h2>Depoimentos</h2>

            <div className="testimonials-list">
                <div className="testimonials-card">
                    <p>"A melhor manicure da região! Atendimento impecável."</p>
                    <span>- Maria Silva</span>
                </div>

                <div className="testimonials-card">
                    <p>"Minhas unhas nunca ficaram tão lindas!"</p>
                    <span>- Ana Paula</span>
                </div>
            </div>
        </section>
    );
}