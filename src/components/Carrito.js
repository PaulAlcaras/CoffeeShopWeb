// src/components/Carrito.js
import React from 'react';

const Carrito = ({ goToMenu }) => {
    return (
        <div>
            <header>
                <h1>Carrito</h1>
            </header>
            <p>El carrito está vacío.</p>
            <button onClick={goToMenu}>Volver al Menú</button>
        </div>
    );
};

export default Carrito;
