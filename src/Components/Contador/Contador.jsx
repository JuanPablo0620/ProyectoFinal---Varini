import { useState } from "react";

const Contador = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition duration-300" onClick={restarContador}> - </button>
        <strong className="text-lg font-semibold">{contador}</strong>
        <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition duration-300" onClick={sumarContador}> + </button>
      </div>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  );
};

export default Contador;