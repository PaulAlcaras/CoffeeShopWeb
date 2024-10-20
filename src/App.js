// src/App.js
import React from 'react';
import Menu from './components/Menu';
import Ofertas from './components/Ofertas';
import Carrito from './components/Carrito'; 
import './styles/App.css';

const App = () => {
    const [currentPage, setCurrentPage] = React.useState('Menu');

    const goToMenu = () => setCurrentPage('Menu');
    const goToOfertas = () => setCurrentPage('Ofertas');
    const goToCarrito = () => setCurrentPage('Carrito');
    

    return (
        <div>
            {currentPage === 'Menu' && (
                <Menu goToMenu={goToMenu} goToOfertas={goToOfertas} />)}
            {currentPage === 'Ofertas' && (
                <Ofertas goToMenu={goToMenu} goToOfertas={goToOfertas} />)}
            {currentPage === 'Carrito' && (
                <Carrito goToMenu={goToMenu} goToOfertas={goToOfertas} goToCarrito={goToCarrito} />)}
        </div>
    );
};

export default App;
