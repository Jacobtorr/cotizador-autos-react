import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error";

function Formulario() {

   const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();


   function handleSubmit (e) {
    e.preventDefault();

    // Validar campos del Formulario
    if(Object.values(datos).includes('')) {
        setError('Todos los campos son obligatorios');
        return;
    }

    // Una vez que pasamos la validacion
    setError('');
    cotizarSeguro();
   }

  return (
    
    <>
       {error && <Error />}
        <form 
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>

                <select 
                    name="marca" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                    <option value="">-- Seleccionar Marca --</option>
                    {MARCAS.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}

                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>

                <select 
                    name="year" 
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option value="">-- Seleccionar Año --</option>
                    {YEARS.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}

                </select>
            </div>

            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un Plan
                </label>

                <div className="flex gap-3 items-center">
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio" 
                                name="plan" 
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit" 
                value="Cotizar" 
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-xl"
            />
        </form>
    </>
  )
}
export default Formulario