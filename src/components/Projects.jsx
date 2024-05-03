
const Projects = () => {
    return (
        <>
            <div id="Projects" className="w-full flex justify-center pt-16">
                <div className="w-4/5">
                    <div className="w-full">
                        <h2 className="text-2xl text-blue-800 font-semibold">Projects</h2>
                    </div>
                    <div className="flex flex-col w-full gap-10 justify-center py-5">
                        <div className="flex px-3 pt-5 pb-10 border-b border-gray-400 items-center">
                            <div className="flex flex-col justify-center gap-3">
                                <h4 className="font-extrabold text-xl">COTEB</h4>
                                <p>Este es un proyecto creado para empresas de cualquier tipo, donde los usuarios podran realizar coquizaciones sobre los productos de las empresas</p>
                                <div className="w-full flex gap-2">
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">PostgreSQL</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">ReactJS</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">NodeJS</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">Express.js</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">JavaScript</span>
                                </div>
                                <div>
                                    <span>Status: </span>
                                    <span className="bg-yellow-400 px-2 py-1 rounded-full text-black">Updating</span>
                                </div>
                                <div className="flex gap-2">
                                    <a href="https://github.com/ld-ebrat/frontCotizacion" target="_blank" rel="noopener noreferrer"><img src="/images/github-b-32.png"/></a>
                                    <a href="https://front-cotizacion.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="/images/site.png"/></a>
                                </div>
                            </div>
                            <div>
                                <img src="/images/coteb.webp" className="shadow-blue-600 shadow-lg" />
                            </div>
                        </div>
                        <div className="flex px-3 pt-5 pb-10 border-b border-gray-400 items-center">
                            <div>
                                <img src="/images/task.webp" className="shadow-blue-600 shadow-lg" />
                            </div>
                            <div className="px-5 flex flex-col justify-center gap-3">
                                <h4 className="font-extrabold text-xl">Task Manager</h4>
                                <p>Este es un proyecto creado para gestionar las tareas personales donde podras categorizarlas, filtrarlas entre otras funcionalidades</p>
                                <div className="w-full flex gap-2">
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">PostgreSQL</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">ReactJS</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">NodeJS</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">Express.js</span>
                                    <span className="border border-black px-2 rounded-full text-sm bg-gray-300">JavaScript</span>
                                </div>
                                <div>
                                    <span>Status: </span>
                                    <span className="bg-yellow-400 px-2 py-1 rounded-full text-black">Updating</span>
                                </div>
                                <div className="flex gap-2">
                                    <a><img src="/images/github-b-32.png"/></a>
                                    <a><img src="/images/site.png"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
