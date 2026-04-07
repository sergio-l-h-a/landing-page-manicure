import '../styles/gallery.css';

export default function Gallery() {
    return(
        <section id="gallery" className="gallery">
            <h2>Galeria</h2>

            <div className="gallery-grid">
                <img src="src/assets/decorada.webp" alt="Unhas decoradas" />
                <img src="src/assets/gel.webp" alt="Unhas francesinha" />
                <img src="src/assets/unhas-vermelhas.webp" alt="Unhas em gel" />
                <img src="src/assets/dourada.webp" alt="Unhas vermelhas" />
            </div>
        </section>
    );
}