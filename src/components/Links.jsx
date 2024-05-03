
const Links = () => {
    return (
        <>
            <div className="fixed flex flex-col h-full justify-center pb-16">
                <div className="bg-gray-600 p-3 right-11 relative transition-right hover:right-0 duration-150 hover:cursor-pointer" onClick={()=>{window.open("https://github.com/ld-ebrat","_blank")}}>
                        <img src="/images/github.png" />
                </div>
                <div className="bg-blue-700 p-3 right-11 relative transition-right hover:right-0 duration-150 hover:cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/leiner-david-ebrat-angarita-0446b0268/","_blank")}}>
                    <a href="https://www.linkedin.com/in/leiner-david-ebrat-angarita-0446b0268/" target="">
                        <img src="/images/link.png" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Links;
