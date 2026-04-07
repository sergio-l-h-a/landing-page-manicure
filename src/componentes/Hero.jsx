import '../styles/hero.css';

export default function Hero() {
    return(
        <section className="hero" id='hero'>
            <div className="hero-content">
                <div className='modura'>
                    <h2>Unhas perfeitas para realçar sua beleza</h2>
                    <p>Atendimento profissional, cuidadoso e com muito carinho.</p>
                </div>
                <a href="https://wa.me/5588981442049?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio" target="_blank" className="btn hero-btn">Agendar agora</a>
            </div>
        </section>
    );
}