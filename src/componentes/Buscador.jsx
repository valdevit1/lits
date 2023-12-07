import React from "react";

const Buscador = ({ realizarBusqueda }) => {
  return (
    <input
      type="text"
      placeholder="realizar una busqueda"
      onChange={(e) => realizarBusqueda(e.target.value)}
    />
  );
};

export default Buscador;
n