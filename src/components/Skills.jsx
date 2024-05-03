
const Skills = () => {
    return (
        <div id="Skills" className="w-full flex justify-center pt-16">
            <div className="w-4/5 flex flex-col items-center">
                <div className="w-full">
                    <h2 className="text-2xl text-blue-800 font-semibold">Tecnologias</h2>
                </div>
                <div className="flex gap-10 w-full py-5 justify-center flex-wrap">
                    <div className="w-3/10 py-3 px-4 flex flex-col items-center border border-blue-700 rounded-2xl shadow-blue-600 shadow-lg">
                        <h3>FrontEnd</h3>
                        <div className="pt-5 flex flex-wrap gap-10 items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/HTML.png" />
                                <h4>HTML</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/css.png" />
                                <h4>CSS</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/javascript.png" />
                                <h4>JavaScript</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/tailwind.png" />
                                <h4>Tailwind</h4>
                            </div>
                            <div>
                                <img src="/images/react.png" />
                                <h4>ReactL</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/10 p-3 flex flex-col items-center border border-blue-700 rounded-2xl shadow-blue-600 shadow-lg">
                        <h3>BackEnd</h3>
                        <div className="pt-5 flex flex-wrap items-center justify-center gap-10">
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/node.png" />
                                <h4>NodeJS</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/express.png" />
                                <h4>Express</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/mongo.png" />
                                <h4>MongoDB</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/postgres.png" />
                                <h4>PostgreSQL</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/python.png" />
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/10 p-3 flex flex-col items-center border border-blue-700 rounded-2xl shadow-blue-600 shadow-lg">
                        <h3>Herramientas</h3>
                        <div className="pt-5 flex flex-wrap items-center justify-center gap-10">
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/git.png"/>
                                <h4>Git</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/github-b-48.png"/>
                                <h4>GitHub</h4>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <img src="/images/npm.png"/>
                                <h4>Npm</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
