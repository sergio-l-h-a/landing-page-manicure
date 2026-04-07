import { useState } from "react";
import '../styles/header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header className="header">
            <h1 className="logo"><a href="#hero">Manicure da Alexia</a></h1>

            {/* Botão hambúrguer */}
            <button 
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Menu */}
            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#gallery">Galeria</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li>
                    <a href="https://wa.me/5588996995582?text=Ol%C3%A1%2C%20quero%20agendar%20um%20hor%C3%A1rio" target="_blank" className="btn">
                    📲 Agendar</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
