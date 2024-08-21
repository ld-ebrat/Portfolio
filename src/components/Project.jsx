
const Project = ({infoProject, nameProject}) => {
    return (
        <>
            <div className="flex px-3 pt-5 pb-10 border-b border-gray-400 items-center">
                <div className="flex flex-col justify-center gap-3">
                    <h4 className="font-extrabold text-xl">{nameProject}</h4>
                    <p>{infoProject.infoProject}</p>
                    <div className="w-full flex gap-2">
                        {
                            infoProject.tecnologi.map( tec => {
                                return <span key={tec.id} className="border border-black px-2 rounded-full text-sm bg-gray-300">{tec}</span>
                            })
                        }
                    </div>
                    <div>
                        <span>Estado: </span>
                        <span className="bg-yellow-400 px-2 py-1 rounded-full text-black">{infoProject.status}</span>
                    </div>
                    <div className="flex gap-2">
                        <a href={`${infoProject.gitH}`} target="_blank" rel="noopener noreferrer"><img src="/images/github-b-32.png" /></a>
                        <a href={`${infoProject.linkWeb}`} target="_blank" rel="noopener noreferrer"><img src="/images/site.png" /></a>
                    </div>
                </div>
                <div>
                    <img src={`${infoProject.linkImg}`} className="shadow-blue-600 shadow-lg" />
                </div>
            </div>
        </>
    );
}

export default Project;
