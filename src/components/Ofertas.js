// src/components/Ofertas.js
import React, { useEffect, useState } from 'react';
import '../styles/ofertas.css';

const Ofertas = ({goToMenu, goToOfertas, goToCarrito}) => {
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        const fetchOfertas = async () => {
            const response = await fetch('/ofertas.json');
            const data = await response.json();
            const ofertasData = data[2].dataoferta; // Asegúrate de que esto sea correcto
            console.log(ofertasData);
            setOfertas(ofertasData);
        };

        fetchOfertas();
    }, []);

    return (
        <div>
            <header>
                <h1>Coffee Shop</h1>
            </header>
            <nav>
                <a onClick={goToMenu} style={{ cursor: 'pointer' }}>Menú</a>
                <a onClick={goToOfertas} style={{ cursor: 'pointer' }}>Ofertas</a>
                <a onClick={goToCarrito} style={{ cursor: 'pointer' }}>Carrito</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div className='oferta-container'>
                <h2>Ofertas</h2>
                <ul>
                    {ofertas.map(oferta => (
                        <li key={oferta.id_oferta}> 
                            <img src={oferta.imagen} alt={oferta.nombre} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Ofertas;
