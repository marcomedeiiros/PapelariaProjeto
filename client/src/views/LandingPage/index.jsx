import React, { useState } from 'react';
import './estilo.css';
import imgs from '../../imgs/arrayImagens.jsx';
import 'font-awesome/css/font-awesome.min.css';


const infos = [
    { info: 'Impressão de documentos em PDF, A4 e pendências de dívidas com alta qualidade', title: 'Impressões', img: imgs.impressao },
    { info: 'Impressão de contratos residenciais com precisão e clareza', title: 'Contratos', img: imgs.contratos },
    { info: 'Impressão de folhetos e panfletos para divulgação com excelente acabamento', title: 'Materiais', img: imgs.panfletos }
];

export default function PapelariaSlider() {
    const [active, setActive] = useState(0);

    const next = () => {
        const nextIndex = (active + 1) % infos.length;
        setActive(nextIndex);
    };

    const prev = () => {
        const prevIndex = (active - 1 + infos.length) % infos.length;
        setActive(prevIndex);
    };

    return (
        <>
            <header className="header">
                <a href="/"><img src={imgs.logo} alt="Logo" className="logo" /></a>
                <ul className="nav">
                    <li ><a href="/">Início</a></li>
                    <li><a href="/">Como funciona</a></li>
                    <li><a href="/">Localização</a></li>
                </ul>
            </header>

            <section className="container">
                <div className="list" style={{ '--calculation': 1 }}>
                    {infos.map((info, index) => (
                        <div key={index} className={`item ${index === active ? 'active' : ''}`}>
                            <div className="car-img">
                                <img src={info.img} alt={`imagem papelaria ${index}`} className="car-img-img" />
                            </div>
                            <div className="content">
                                <p className="car-information">{info.info}</p>
                                <h2 className="car-title">{info.title}</h2>
                                <h1 className="description">Impressões personalizadas com qualidade, agilidade e precisão.</h1>
                                <div className="social-buttons">
                                    <a
                                        href="https://api.whatsapp.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-btn"
                                    >
                                        <i className="fa fa-whatsapp"></i> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button onClick={prev} className="arrow-button">
                        <img src={imgs.arrow} alt="seta-esquerda" className="arrow-icon left" />
                    </button>
                    <button onClick={next} className="arrow-button">
                        <img src={imgs.arrow} alt="seta-direita" className="arrow-icon" />
                    </button>
                </div>

                <div className="indicators">
                    <div className="number">{(active + 1).toString().padStart(2, '0')}</div>
                    <ul className="indicator-list">
                        {infos.map((_, index) => (
                            <li key={index} className={`indicator-dot ${index === active ? 'active' : ''}`}></li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}