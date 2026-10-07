import "./App.css";

import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Introduccion from "./Componentes/Introduccion";
import Editores from "./Componentes/Editores";
import Davinci from "./Componentes/Davinci";
import Footer from "./Componentes/Footer";

function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <Introduccion />
            <Editores />
            <Davinci />
            <Footer />
        </>
    );
}

export default App;
