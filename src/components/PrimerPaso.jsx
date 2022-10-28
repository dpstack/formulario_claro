import ExclamationCircleIcon from '@heroicons/react/solid/ExclamationCircleIcon'

const PrimerPaso = ({
    identificacion, setError, setCondiciones, condiciones, error, activo, setActivo, setIdentificacion, setActual
}) => {

    
    const handleSubmit = e => {
        e.preventDefault();

        if (!Number(identificacion)) { setError(true) } else { setError(false); }
        if (!activo) { setCondiciones(true) } else { setCondiciones(false); }
        if (!error && !condiciones && activo && identificacion !== '') { setActual(2) }
    }

    return (
        <form onSubmit={handleSubmit} className='mt-8'>
            <p className='mt-16 align-left ml-10 text-xl '>Digita el número de NIT sin dígito <br /> de verificación o Cédula de la <br /> empresa a la que representas</p>
            <label className='font-bold text-lg' htmlFor="dni">Número de identificación de la empresa:</label>
            <div>{/* 
            <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
              Email
            </label> */}
                <div className="mt-5 relative rounded-md shadow-sm">
                    <input
                        type="text"
                        name="dni"
                        id="dni"
                        className="block w-full p-4 border-red-300focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" value={identificacion}
                        placeholder="Digita el número de identificación"
                        aria-invalid="true" onChange={e => setIdentificacion(e.target.value)}
                        aria-describedby="email-error"
                    />{
                        error && (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>)}
                </div>
                {
                    error && (
                        <p className="mt-2 text-sm text-red-600" id="email-error">
                            Tu identifación solo deben ser números!.
                        </p>
                    )
                }
                {
                    condiciones && (
                        <p className="mt-2 text-sm text-red-600" id="email-error">
                            Debes aceptar las condiciones!.
                        </p>
                    )
                }
            </div>


            <div className="flex mt-52 gap-6 justify-center">
                <div className="underline text-lg">Acepto términos y condiciones de servicio</div>
                <label htmlFor="checked-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" onChange={() => 
                        
                        setActivo(!activo)} id="checked-toggle" className="sr-only peer" />
                    <div className="w-14 h-8 bg-gray-200 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[12px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                </label>
            </div>
            <button type="submit" className="mt-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Continuar</button>
        </form>
    )
}

export default PrimerPaso