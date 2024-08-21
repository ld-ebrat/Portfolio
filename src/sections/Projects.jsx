import projectsJSON from "../projectsJSON";
import Project from "../components/Project";

const Projects = () => {
    let idIncremental = 0
    return (
        <>
            <div id="Projects" className="w-full flex justify-center pt-16">
                <div className="w-4/5">
                    <div className="w-full">
                        <h2 className="text-2xl text-blue-800 font-semibold">Projects</h2>
                    </div>
                    <div className="flex flex-col w-full gap-10 justify-center py-5">
                    {
                        projectsJSON.map(project => {
                            idIncremental++
                            return <Project key={idIncremental} infoProject={project[Object.keys(project)[0]]} nameProject={Object.keys(project)[0]} />
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;