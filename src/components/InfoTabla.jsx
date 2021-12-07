import React from "react";

const Info = ({ contactos }) => {
  return (
    <div>
      <span class="badge bg-info mt-2">
        Número de contactos {contactos.length}
      </span>
    </div>
  );
};

export default Info;
