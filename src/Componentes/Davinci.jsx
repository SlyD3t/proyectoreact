
import { useState } from "react";

function Davinci() {

    const [mostrarInfo, setMostrarInfo] = useState(false);

    return (
        <section id="davinci" className="py-5 davinci-section">

            <div className="container">

                <div className="text-center mb-5">

                    <p className="section-subtitle">
                        MI PROGRAMA PRINCIPAL Y FAVORITO QUE ESTOY APRENDIENDO A UTILIZAR
                    </p>

                    <h2>¿Qué es DaVinci Resolve?</h2>

                    <p className="section-description">
                        DaVinci Resolve es un programa de edición de video
                        desarrollado por Blackmagic Design. Reúne diferentes
                        herramientas para trabajar con video, color, efectos
                        visuales y audio.
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-md-6 col-lg-3">

                        <div className="card davinci-card h-100">

                            <div className="card-body">

                                <i className="bi bi-scissors"></i>

                                <h5>EDIT</h5>

                                <p>
                                    Permite cortar, organizar y editar los
                                    clips dentro de una línea de tiempo.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <div className="card davinci-card h-100">

                            <div className="card-body">

                                <i className="bi bi-palette"></i>

                                <h5>COLOR</h5>

                                <p>
                                    Incluye herramientas para realizar
                                    correcciones y ajustes de color.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <div className="card davinci-card h-100">

                            <div className="card-body">

                                <i className="bi bi-stars"></i>

                                <h5>FUSION</h5>

                                <p>
                                    Permite trabajar con efectos visuales
                                    y composición.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-6 col-lg-3">

                        <div className="card davinci-card h-100">

                            <div className="card-body">

                                <i className="bi bi-soundwave"></i>

                                <h5>FAIRLIGHT</h5>

                                <p>
                                    Está orientado al trabajo y edición
                                    del audio.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="text-center mt-5">

                    <button
                        className="btn btn-davinci"
                        onClick={() => setMostrarInfo(!mostrarInfo)}
                    >
                        {mostrarInfo
                            ? "Ocultar información"
                            : "Mostrar más información"
                        }
                    </button>

                </div>

                {mostrarInfo && (

                    <div className="extra-info mt-4">

                        <h4>
                            Un programa para diferentes necesidades
                        </h4>

                        <p>
                            Una de las características de DaVinci Resolve es que
                            diferentes procesos de producción audiovisual pueden
                            realizarse dentro del mismo programa. Esto permite
                            trabajar con edición, color, efectos y audio sin
                            necesidad de utilizar un programa diferente para
                            cada proceso.
                        </p>

                        <div className="mt-4">

                            <h5 className="mb-3">
                                Pantalla inicial de DaVinci Resolve
                            </h5>

                            <div className="text-center">

                                <img
                                    src="/inicio.jpg"
                                    className="img-fluid rounded shadow davinci-main-image"
                                    alt="Pantalla inicial de DaVinci Resolve"
                                />

                            </div>

                            <p className="text-center mt-2">
                                Pantalla que aparece al iniciar DaVinci Resolve.
                            </p>

                        </div>

                        <div className="mt-5">

                            <h5 className="text-center mb-4">
                                Principales secciones del programa
                            </h5>

                            <div className="row g-4">

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src="/edit.jpg"
                                            className="card-img-top"
                                            alt="Página Edit de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Edit
                                            </h6>

                                            <p className="card-text">
                                                Área donde se realiza la edición,
                                                organización y montaje de los clips.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src="/color.jpg"
                                            className="card-img-top"
                                            alt="Página Color de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Color
                                            </h6>

                                            <p className="card-text">
                                                Área utilizada para realizar
                                                correcciones y ajustes de color.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src="/fusion.jpg"
                                            className="card-img-top"
                                            alt="Página Fusion de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Fusion
                                            </h6>

                                            <p className="card-text">
                                                Área destinada a efectos visuales,
                                                composición y gráficos.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src=""
                                            className="card-img-top"
                                            alt="Página Fairlight de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Fairlight
                                            </h6>

                                            <p className="card-text">
                                                Área enfocada en la edición,
                                                mezcla y procesamiento del audio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Davinci;