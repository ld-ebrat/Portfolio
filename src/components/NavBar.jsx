import { useEffect, useRef, } from "react";
import { Link } from "react-scroll"

const NavBar = () => {
    const elemntRef = useRef(null)
    const elementRef = useRef(null)

    useEffect(() => {
        const elemt = elemntRef.current
        const element = elementRef.current

        if (element) {
            element.style.height = `${elemt.clientHeight}px`
        }
    }, [])
    return (
        <header>
            <nav ref={elemntRef} className="w-full flex justify-between items-center py-2 px-10 fixed border-b border-gray-300 bg-white">
                <div>
                    <img src="/images/Logo-E-B.png" className="w-24" />
                </div>
                <div className="flex gap-10">
                    <Link className="hover:cursor-pointer" to="Home" spy={true} smooth={true} duration={500}>Home</Link>
                    <Link className="hover:cursor-pointer" to="Projects" smooth={true} duration={500}>Proyectos</Link>
                    <Link className="hover:cursor-pointer" to="Skills" spy={true} smooth={true} duration={500}>Tecnologias</Link>
                    <Link className="hover:cursor-pointer" to="About" spy={true} smooth={true} duration={500}>Sobre mi</Link>
                    <Link className="hover:cursor-pointer" to="Certy" spy={true} smooth={true} duration={500}>Certificados</Link>
                    <Link className="hover:cursor-pointer" to="Contact" spy={true} smooth={true} duration={500}>Contacto</Link>
                </div>
            </nav>
            <div ref={elementRef} className="w-full"></div>
        </header>
    );
}

export default NavBar;
