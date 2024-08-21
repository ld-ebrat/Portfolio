import NavBar from '../components/NavBar';
import Links from '../sections/Links';
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import About from '../sections/About';
import Certy from '../sections/Certy';
import Footer from '../sections/Footer';

const Main = () => {
    return (
        <>
            <NavBar />
            <Links />
            <Home />
            <Projects />
            <Skills />
            <About />
            <Certy />
            <Footer />
        </>
    );
}

export default Main;
