import { useContext } from "react";
import CarritoContext from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CarItem from "../CarItem/CarItem";
import React from "react";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-[#1E2939] py-4 px-4 border rounded-lg">
          <h2 className="font-poppins font-bold text-white mb-4">
            No hay productos en el carrito
          </h2>
          <Link
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            to="/"
          >
            Ver productos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <div className="text-center">
            <h3 className="text-white text-lg font-bold">Total: ${total}</h3>
            <h3 className="text-white text-lg font-bold">
              Cantidad total: {cantidadTotal}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full mb-8 justify-items-center">
  {carrito.map((producto) => (
    <CarItem key={producto.item.id} item={producto.item} cantidad={producto.cantidad} img={producto.item.img}
    />
  ))}
</div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </button>
          <Link
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto text-center"
            to="/checkout"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;