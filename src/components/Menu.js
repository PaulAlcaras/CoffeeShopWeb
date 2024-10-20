import React, { useEffect, useState } from 'react';
import '../styles/menu.css';

const Menu = ({ goToMenu, goToOfertas, goToCarrito }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await fetch('/producto.json');
            const data = await response.json();
            const productoData = data[2].data; // Asegúrate de que esto sea correcto
            console.log(productoData);
            setProductos(productoData);
        };

        fetchProductos();

        
    }, []);

    // Función para agregar productos al carrito
    // const agregarAlCarrito = (producto) => {
    //     setCarrito([...carrito, producto]);
    //     alert(`${producto.nombre} añadido al carrito!`); // Alerta simple para mostrar que se añadió
    // };

    // Dividir productos por tipo
    const tipos = ['Frio', 'Caliente', 'Bubble Tea', 'Pasteles', 'Galletas'];

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
            <div className='menu-container'>
                <h2>Menú</h2>
                <nav className='nav2'>   
                    {tipos.map(tipo => (
                        <a key={tipo} href={`#${tipo.toLowerCase()}`}>{tipo}</a>
                    ))}
                </nav>
                {tipos.map(tipo => (
                    <div key={tipo} id={tipo.toLowerCase()}>
                        <h2>{tipo}</h2>
                        <ul>
                            {productos.filter(producto => producto.tipo === tipo).map(producto => (
                                <li key={producto.id_producto}> 
                                    <img src={producto.imagen} alt={producto.nombre} />
                                    <h3>{producto.nombre}</h3>
                                    <div className='contenedor-productos'>
                                        <p>{producto.descripcion}</p>
                                        <p>Precio: ${parseFloat(producto.precio).toFixed(2)}</p>
                                        <button>Añadir</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                
                {/* Sección del Carrito
                <div id="carrito">
                    <h2>Carrito</h2>
                    {carrito.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        <ul>
                            {carrito.map((producto, index) => (
                                <li key={index}>
                                    <h3>{producto.nombre}</h3>
                                    <p>Precio: ${parseFloat(producto.precio).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>                 */}


            </div>
        </div>
    );
};

export default Menu;
