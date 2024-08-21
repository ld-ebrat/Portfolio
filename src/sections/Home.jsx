
const Home = () => {
    return (
        <>
            <div id="Home" className="h-screen w-full flex justify-center items-center pt-5">
                <div className="flex flex-col items-center gap-5">
                    <div className="w-56">
                        <img src="/images/img-cv.webp" className="p-2 border-2 border-dashed rounded-full border-black"></img>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-bold text-blue-800 text-center">
                            Desarrollador Full Stack
                        </h2>
                        <h2 className="text-3xl font-bold">
                            Ebrat Leiner
                        </h2>
                    </div>
                    <h6 className="text-lg">Full Stack React & NodeJS</h6>
                    <button className="bg-blue-800 text-white border border-blue-900 px-5 py-1 rounded-full">Descargar CV</button>
                </div>
            </div>
        </>
    );
}

export default Home;
