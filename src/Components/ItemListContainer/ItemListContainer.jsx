import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
/* import { getCategoria, getProductos } from '../../asyncmock'; */
import ItemList from "../ItemList/ItemList";

import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /*   useEffect(() => {
    if (categoria) {
      getCategoria(categoria)
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    } else {
      getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error));
    }
  }, [categoria]); */

  useEffect(() => {
    const misProductos = categoria
      ? query(collection(db, "productos"), where("categoria", "==", categoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        alert(
          "Hubo un error al cargar los productos. Por favor, intenta de nuevo más tarde."
        );
      });
  }, [categoria]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full my-10 px-4 md:px-10">
        <h2 className="font-poppins font-bold text-center flex-1 md:ml-10 text-lg md:text-2xl">
          {categoria ? `Productos de ${categoria}` : "Todos los productos"}
        </h2>
        <div className="mt-4 md:mt-0 md:mr-10 w-full md:w-auto">
          <form
            onSubmit={handleSearch}
            className="flex items-center w-full md:w-auto"
          >
            <input
              type="text"
              placeholder="Buscar equipo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 w-full md:w-auto border border-gray-300 rounded-sm mr-2"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-sm hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center w-full my-10 overflow-x-auto">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
