
const Certy = () => {
    return (
        <>
            <div id="Certy" className="pt-16 w-full flex flex-col justify-center items-center">
                <div className="w-4/5">
                    <h2 className="text-2xl text-blue-800 font-semibold">Certificados</h2>
                </div>
                <div className="w-4/5 flex gap-10 justify-center pt-5">
                    <div className="flex flex-wrap gap-10 w-full justify-center">
                        <div className="w-[45%] flex justify-center flex-col items-center">
                            <img src="/images/full.webp"></img>
                        </div>
                        <div className="w-[45%] flex justify-center">
                            <img src="/images/html_css.webp"></img>
                        </div>
                        <div className="w-[45%] flex justify-center">
                            <img src="/images/c_javascript.webp"></img>
                        </div>
                        <div className="w-[45%] flex justify-center">
                            <img src="/images/c_python.webp"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certy;
