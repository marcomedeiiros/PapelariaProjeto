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

    const [setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(prevState => !prevState);
    };

    return (
        <>
            <header className="header">
                <a href="/"><img src={imgs.logo} alt="Logo" className="logo" /></a>
                <ul className="nav">
                    <li><a href="/">Início</a></li>
                    <li><a href="#funciona">Como funciona</a></li>
                    <li><a href="#loca">Localização</a></li>
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
                <div className="course-section">
                    <h2 className="section-header" id="funciona">Como <span>Funciona</span></h2>
                    <div className="course-cards">
                        <div className="course-card">
                            <img src={imgs.telefone} alt="contato" className="logo-cabelo" />
                            <h2 className="course-title">Meios de contato</h2>
                            <p className="course-description">Entre em contato para fazer seu orçamento via WhatsApp, Trabalhamos com impressões de documentos importantes, contratos residenciais e muito mais. Qualidade, agilidade e confiança bem aqui, ao seu alcance.</p>
                        </div>

                        <div className="course-card">
                            <img src={imgs.informacao} alt="informacoes" className="logo-cabelo" />
                            <h2 className="course-title">Informações</h2>
                            <p className="course-description">Trabalhamos exclusivamente via home office. Não realizamos atendimento presencial em nossa residência, oferecendo nossos serviços apenas para quem realmente precisa, com toda a dedicação e profissionalismo.</p>
                        </div>

                        <div className="course-card">
                            <img src={imgs.mapper} alt="finish" className="logo-cabelo" />
                            <h2 className="course-title">Entrega final</h2>
                            <p className="course-description">Após a confirmação do pagamento, a entrega é realizada em nossa residência. Caso seja um documento digital, podemos enviá-lo de forma prática e rápida pelo WhatsApp. Facilidade e comodidade para você!</p>
                        </div>
                    </div>
                </div>

                <div className='Agendamentos'>
                    <div className="text-agendar">
                        <h1 id='loca'>Nossa <span>Localização.</span></h1>
                        <p>Na nossa papelaria home office, sua experiência vai além de uma simples impressão. Oferecemos praticidade, preços justos e um atendimento feito para facilitar sua rotina. Trabalhamos com documentos importantes, contratos e materiais diversos, sempre com qualidade e agilidade. Tudo isso sem precisar sair de casa entre em contato e descubra como podemos te ajudar de forma rápida e eficiente!</p>

                        <p><strong>Endereço:</strong> Av. pintamanhamgaba, lá aonde o vento fez a curva N°200</p>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.7081000137036!2d-40.29062452392678!3d-20.312345981163723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817cf17865ee1%3A0x39dd8e608645944!2sSHOPPING%20VIT%C3%93RIA!5e0!3m2!1spt-BR!2sbr!4v1745704159523!5m2!1spt-BR!2sbr"
                            width="auto"
                            height="350"
                            style={{ borderRadius: '50px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}