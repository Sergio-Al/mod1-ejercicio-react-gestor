import { useState } from "react";
import "./estilos/App.css";
import empleadosData from "../datos/empleados.json";
import CmpEmpleados from "./componentes/CmpEmpleados";

function App() {
  const [empleados, setEmpleados] = useState(empleadosData);
  const [filtro, setFiltro] = useState("todos");

  const cambiarEstado = (id) => {
    const nuevoEmpleados = empleados.map((empleado) =>
      empleado.id === id ? { ...empleado, estado: !empleado.estado } : empleado
    );
    setEmpleados(nuevoEmpleados);
  };

  const cambiarFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const empleadosFiltrados = empleados.filter((empleado) => {
    if (filtro === "activos") return empleado.estado === true;
    if (filtro === "inactivos") return empleado.estado === false;
    return true;
  });

  return (
    <>
      <div className="container">
        <h1>Gestor de empleados</h1>
        <label>Filtrar por estado</label>
        <select value={filtro} onChange={cambiarFiltro}>
          <option value="todos">Todos</option>
          <option value="activos">Activos</option>
          <option value="inactivos">Inactivos</option>
        </select>
        <CmpEmpleados
          empleados={empleadosFiltrados}
          cambiarEstado={cambiarEstado}
        />
      </div>
    </>
  );
}

export default App;
