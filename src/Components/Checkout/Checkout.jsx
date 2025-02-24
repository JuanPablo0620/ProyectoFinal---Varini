import { useContext, useState } from "react";
import CarritoContext from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  //funciones

  //validamos formulario
  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }

    //1) creamos un objetos con todos los datos de la orden de compra
    const orden = {
      item: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //2) guardamos la orden de compra en la base de datos
    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  return (
    <>
      <main className="flex justify-center">
        <div className="bg-[#1E2939] w-auto flex flex-col items-center justify-center px-4 py-4 h-auto border mt-30">
          <h2 className=" font-poppins font-bold mb-4">Checkout Final</h2>
          <form className="flex flex-col gap-3" onSubmit={manejadorFormulario}>
            {carrito.map((producto) => {
              <div key={producto.item.id}>
                <p>
                  {producto.item.nombre} X {producto.cantidad}{" "}
                </p>
                <p>{producto.precio}</p>
                <hr />
              </div>;
            })}
            <div className="flex gap-4 items-center">
              <label className=" font-poppins font-bold" htmlFor="">
                Nombre
              </label>
              <input
                className="border rounded-lg"
                onChange={(e) => setNombre(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className=" font-poppins font-bold" htmlFor="">
                Apellido
              </label>
              <input
                className="border rounded-lg"
                onChange={(e) => setApellido(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className=" font-poppins font-bold" htmlFor="">
                Teléfono
              </label>
              <input
                className="border rounded-lg"
                onChange={(e) => setTelefono(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className=" font-poppins font-bold" htmlFor="">
                Email
              </label>
              <input
                className="border rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className=" font-poppins font-bold" htmlFor="">
                Email Confirmación
              </label>
              <input
                className="border rounded-lg "
                onChange={(e) => setEmailConfirmacion(e.target.value)}
                type="text"
              />
            </div>
            <div className="flex justify-center">
              <button
                className=" flex justify-center bg-blue-500 text-white w-50 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                type="submit"
              >
                Confirmar su compra
              </button>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {ordenId && (
              <strong>
                gracias por su compra!! Tu número de orden es: {ordenId}
              </strong>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Checkout;
