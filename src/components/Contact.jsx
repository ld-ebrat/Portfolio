import { useForm } from 'react-hook-form'
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            message: ""
        }
    })
    return (
        <>
            <div id="Contact" className="pt-16 w-full flex flex-col justify-center items-center">
                <div className='w-4/5'>
                    <h3 className='text-2xl font-semibold text-blue-800'>Contantame</h3>
                </div>
                <div className='w-3/4 p-20 flex flex-col items-center gap-10'>
                    <div className='flex flex-col gap-10 w-10/12'>
                        <div className="flex w-full justify-between">
                            <div className='flex flex-col w-[45%]'>
                                <label>Nombre</label>
                                <input {...register('name')} className='border-b-2 border-black outline-none'></input>
                            </div>
                            <div className='flex flex-col w-[45%]'>
                                <label>Apellido</label>
                                <input {...register('lastName')} className='border-b-2 border-black outline-none'></input>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Email</label>
                            <input {...register('email')} className='border-b-2 border-black outline-none'></input>
                        </div>
                        <div className='w-full h-28'>
                            <textarea {...register('message')} placeholder='Mensaje' className='border-b-2 border-black w-full outline-none h-full'></textarea>
                        </div>
                    </div>
                    <div className='flex w-10/12'>
                        <button className='border border-blue-800 rounded-full py-1 px-5 outline-none bg-blue-800 text-white'>Enviar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
