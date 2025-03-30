import React from "react";
import "../estilos/App.css";

const CmpEmpleado = ({ empleado, cambiarEstado }) => {
  return (
    <div className={`empleado-card ${empleado.estado ? "activo" : "inactivo"}`}>
      <p>
        <strong>
          {empleado.apellidos}, {empleado.nombre}
        </strong>
        <p>Cargo: {empleado.cargo}</p>
        <p>
          Estado:{" "}
          <span
            className={empleado.estado ? "estado-activo" : "estado-inactivo"}
          >
            {empleado.estado ? "Activo ✅" : "Inactivo ❌"}
          </span>
        </p>
        <button
          className="cambiar-estado-btn"
          onClick={() => cambiarEstado(empleado.id)}
        >
          Cambiar Estado
        </button>
      </p>
    </div>
  );
};

export default CmpEmpleado;
