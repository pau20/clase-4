import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">MOOV</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active">Inicio<span className="sr-only"></span></a>
                <a className="nav-link">Productos</a>
                <a className="nav-link">Nosotros</a>
                <a className="nav-link">Contacto</a>
                </div>
            </div>
        </nav>
        <CartWidget></CartWidget>
        </>
    )
}

export default Navbar;
