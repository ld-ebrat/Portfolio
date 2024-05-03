
const Footer = () => {
    return (
        <>
            <div className='pt-16 w-full text-white'>
                <div className='w-full flex justify-center gap-20 bg-black py-10 px-5'>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='w-20 flex flex-col gap-3'>
                            <img src='/images/Logo-E-w.png' />
                        </div>
                        <h3>Developed by Leiner Ebrat</h3>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex gap-3'>
                            <a href="https://github.com/ld-ebrat" target="_blank">
                                <img src='/images/github.png' />
                            </a>
                            <a href="https://www.linkedin.com/in/leiner-david-ebrat-angarita-0446b0268/" target="">
                                <img src='/images/link-w.png' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
