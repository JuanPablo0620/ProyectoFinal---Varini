import { useState, createContext } from "react";

const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

// Contenedor del array del carrito de compras con sus funciones auxiliares. La lógica del contexto
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  

  // Funciones del carrito
  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad); // Cantidad total del carrito (cantidad hasta el momento + nueva cantidad a agregar)
      setTotal((prev) => prev + item.precio * cantidad); // Cantidad total del precio del nuevo producto a agregar
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProductos = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]),
    setTotal(0),
    setCantidadTotal(0)
  };

  return (
    <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProductos, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;