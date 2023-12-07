import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./componentes/BaseColaboradores";
import Alert from "./componentes/Alert";
import Buscador from "./componentes/Buscador";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";

function App() {
  const [colaboradores, setcolaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaborfadoresFiltrados] =
    useState(colaboradores);

  const agregarColaborador = (colaborador) => {
    colaborador.id = colaboradores.length + 1;
    setColaboradores([...colaboradores, colaborador]);
    setColaborfadoresFiltrados(...colaboradores, colaborador);
  };

  const realizarBusqueda = (valorInput) => {
    if (valorInput == "") setColaborfadoresFiltrados(BaseColaboradores);
    else
      setColaborfadoresFiltrados(
        colaboradores.filter(
          (colaborador) =>
            colaborador.id == valorInput ||
            colaborador.nombre == valorInput ||
            colaborador.correo == valorInput ||
            colaborador.edad == valorInput ||
            colaborador.cargo == valorInput ||
            colaborador.telefono == valorInput
        )
      );
  };

  return (
    <>
      <BaseColaboradores />
      <Alert />
      <Buscador realizarBusqueda={realizarBusqueda} />
      <Listado colaboradores={colaboradoresFiltrados} />
      <Formulario agregarColaborador={agregarColaborador} />
    </>
  );
}

export default App;
