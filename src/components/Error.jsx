import useCotizador from "../hooks/useCotizador"

function Error() {

    const { error } = useCotizador()

  return (
    <div className="border text-center border-red-400 bg-red-100 py-2 text-red-700 rounded-xl">
        <p className="">{error}</p>
    </div>
  )
}
export default Error