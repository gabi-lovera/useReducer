import React, { useEffect, useReducer, useState } from "react";
import { contactosReducer } from "../reducers/contactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";
import Info from "./InfoTabla";

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(contactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className="btn btn-success"
      >
        {!formView ? "+ Agregar Contacto" : "- Cerrar Formulario"}
      </button>
      {formView && <FormularioAdd dispatch={dispatch} />}
      <Info contactos={state} />
      <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
