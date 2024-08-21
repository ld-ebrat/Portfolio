
const About = () => {
    return (
        <>
            <div id="About" className="w-full flex items-center flex-col gap-5 pt-16">
                <div className="w-4/5 flex flex-col items-center">
                    <div className="w-full pb-5">
                        <h4 className="text-2xl text-blue-800 font-semibold">Sobre Mi</h4>
                    </div>
                    <div className="w-11/12">
                        <p>Desarrollador Full stack, capacitado y apasionado por la creacion de soluciones tecnologicas, con conocimientos tanto en el desarrollo FrontEnt como BackEnd. Con habilidades en el manejo de tecnologias como JavaScript,ReactJs, NodeJs, Python, Bases de Datos como lo son MongoDB, PostgreSQL. Ademas con habilidades blandas como el trabajo en equipo, la resiliencia, entre otras que me permiten ser un desarrollador con gran adaptacion a diferentes funciones</p>
                    </div>
                </div>
                <div>
                    <a href="/documents/Hoja de vida Leiner.pdf" download={"Hoja de vida Leiner.pdf"} className="border border-black rounded-3xl px-4 py-1">Dowload CV</a>
                </div>
            </div>
        </>
    );
}

export default About;
