import { useState } from "react";

function Davinci() {
    const herramientas = [
        {
            nombre: "EDIT",
            icono: "bi-scissors",
            descripcion:
                "Permite cortar, organizar y editar los clips dentro de una línea de tiempo."
        },
        {
            nombre: "COLOR",
            icono: "bi-palette",
            descripcion:
                "Incluye herramientas para realizar correcciones y ajustes de color."
        },
        {
            nombre: "FUSION",
            icono: "bi-stars",
            descripcion:
                "Permite trabajar con efectos visuales y composición."
        },
        {
            nombre: "FAIRLIGHT",
            icono: "bi-soundwave",
            descripcion:
                "Está orientado al trabajo y edición del audio."
        }
    ];

    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [herramientaSeleccionada, setHerramientaSeleccionada] =
        useState("EDIT");
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

                    {herramientas.map((herramienta) => (

                        <div
                            className="col-md-6 col-lg-3"
                            key={herramienta.nombre}
                        >
                            <div
                                className={`card davinci-card h-100 ${
                                    herramientaSeleccionada === herramienta.nombre
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    setHerramientaSeleccionada(
                                        herramienta.nombre
                                    )
                                }
                            >
                                <div className="card-body">

                                    <i
                                        className={`bi ${herramienta.icono}`}
                                    ></i>

                                    <h5>{herramienta.nombre}</h5>

                                    <p>{herramienta.descripcion} </p>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                <div className="selected-tool mt-5">

                    {herramientaSeleccionada === "EDIT" && (
                        <>
                            <h3>EDIT</h3>

                            <p>
                                En esta sección trabajo con la línea de
                                tiempo, organizo los clips, realizo cortes
                                y agrego transiciones para construir el
                                video.
                            </p>
                        </>
                    )}

                    {herramientaSeleccionada === "COLOR" && (
                        <>
                            <h3>COLOR</h3>

                            <p>
                                En Color puedo corregir la imagen, ajustar
                                la exposición, el contraste y darle una
                                apariencia determinada al video.
                            </p>
                        </>
                    )}

                    {herramientaSeleccionada === "FUSION" && (
                        <>
                            <h3>FUSION</h3>

                            <p>
                                Fusion permite crear efectos visuales,
                                composiciones y diferentes elementos
                                gráficos para los proyectos.
                            </p>
                        </>
                    )}

                    {herramientaSeleccionada === "FAIRLIGHT" && (
                        <>
                            <h3>FAIRLIGHT</h3>

                            <p>
                                Fairlight está enfocado en el trabajo con
                                audio, permitiendo ajustar niveles, efectos
                                y diferentes elementos de sonido.
                            </p>
                        </>
                    )}

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
                            Una de las características de DaVinci Resolve es
                            que diferentes procesos de producción audiovisual
                            pueden realizarse dentro del mismo programa. Esto
                            permite trabajar con edición, color, efectos y
                            audio sin necesidad de utilizar un programa
                            diferente para cada proceso.
                        </p>

                        <div className="mt-4">

                            <h5 className="mb-3">
                                Pantalla inicial de DaVinci Resolve
                            </h5>

                            <div className="text-center">
                                <img
                                    src="/proyectoreact/inicio.jpg"
                                    className="img-fluid rounded shadow davinci-main-image"
                                    alt="Pantalla inicial de DaVinci Resolve"
                                />
                            </div>

                            <p className="text-center mt-2">
                                Pantalla que aparece al iniciar DaVinci
                                Resolve.
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
                                            src="/proyectoreact/edit.jpg"
                                            className="card-img-top"
                                            alt="Página Edit de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Edit
                                            </h6>

                                            <p className="card-text">
                                                Área donde se realiza la
                                                edición, organización y
                                                montaje de los clips.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src="/proyectoreact/color.jpg"
                                            className="card-img-top"
                                            alt="Página Color de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Color
                                            </h6>

                                            <p className="card-text">
                                                Área utilizada para realizar
                                                correcciones y ajustes de
                                                color.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">
                                    <div className="card davinci-image-card h-100">
                                        <img
                                            src="/proyectoreact/fusion.jpg"
                                            className="card-img-top"
                                            alt="Página Fusion de DaVinci Resolve"
                                        />
                                        <div className="card-body">

                                            <h6 className="card-title"> Fusion </h6>

                                            <p className="card-text">
                                                Área destinada a efectos
                                                visuales, composición y
                                                gráficos.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-3">

                                    <div className="card davinci-image-card h-100">

                                        <img
                                            src="/proyectoreact/fairlight.jpg"
                                            className="card-img-top"
                                            alt="Página Fairlight de DaVinci Resolve"
                                        />

                                        <div className="card-body">

                                            <h6 className="card-title">
                                                Fairlight
                                            </h6>

                                            <p className="card-text">
                                                Área enfocada en la edición,
                                                mezcla y procesamiento del
                                                audio.
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