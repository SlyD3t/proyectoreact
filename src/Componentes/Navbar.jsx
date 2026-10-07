function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-davinci">

            <div className="container">

                <a className="navbar-brand fw-bold" href="#">
                    DaVinci<span>Veronica</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#edicion">
                                Edición
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#davinci">
                                DaVinci Resolve
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;