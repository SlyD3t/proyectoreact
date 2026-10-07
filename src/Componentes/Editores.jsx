function Editores() {
    return (
        <section className="py-5 editors-section" id="editores">

            <div className="container">

                <div className="text-center mb-5">

                    <p className="section-subtitle">
                        HERRAMIENTAS
                    </p>

                    <h2>Algunos editores de video</h2>

                    <p className="section-description">
                        Existen diferentes programas destinados a la edición
                        de video. Cada uno cuenta con características y
                        herramientas diferentes.
                    </p>

                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card editor-card h-100">
                            <div className="card-body text-center">
                                <i className="bi bi-film editor-icon"></i>
                                <h5 className="card-title">
                                    Adobe Premiere Pro
                                </h5>
                                <p className="card-text">
                                    Programa de edición utilizado para crear
                                    y editar diferentes tipos de proyectos
                                    audiovisuales.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card editor-card h-100">

                            <div className="card-body text-center">

                                <i className="bi bi-phone editor-icon"></i>

                                <h5 className="card-title">
                                    CapCut
                                </h5>

                                <p className="card-text">
                                    Editor que facilita la creación de videos
                                    para redes sociales y contenido digital.
                                </p>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card editor-card h-100">

                            <div className="card-body text-center">

                                <i className="bi bi-apple editor-icon"></i>

                                <h5 className="card-title">
                                    Final Cut Pro
                                </h5>

                                <p className="card-text">
                                    Software de edición de video desarrollado
                                    para los dispositivos de Apple.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">

                        <div className="card editor-card featured-card h-100">

                            <div className="card-body text-center">

                                <i className="bi bi-camera-reels editor-icon"></i>

                                <h5 className="card-title">
                                    DaVinci Resolve
                                </h5>

                                <p className="card-text">
                                    Programa que integra edición, color,
                                    efectos visuales y herramientas de audio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Editores;
