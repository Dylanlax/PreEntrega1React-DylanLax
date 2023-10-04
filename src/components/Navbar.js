import CartWidget from "./CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


function Navbar( {img} ){
    
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src={img} alt="icono-marca" width={170} height={70}/>
                </div>
            </div>


            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to={'/'} className={"navbar-item"}>
                        CompusXD!
                    </NavLink>

                    <a className="navbar-item">
                        Catalogo
                    </a>

                    <a className="navbar-item">
                        Arma tu PC
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Más informacion
                        </a>


                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Contacto
                            </a>
                            <a className="navbar-item">
                                Donde estamos
                            </a>
                            <a className="navbar-item">
                                Preguntas frecuentes
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <CartWidget/>
        </nav>

    )
}







export default Navbar;