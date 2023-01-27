import { useState } from "react";

const AddPlayer = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div>
      <form action="">
        <label>Nombre completo:</label>
        <input type="text" placeholder="Lionel Andrés Messi Cuccittini" />
        <label>Nombre de camiseta:</label>
        <input type="text" placeholder="Messi" />
        <label>Edad:</label>
        <input type="number" placeholder="18" />
        <label>Posición:</label>
        <input type="text" placeholder="Delantero" />
        <label>Dorsal:</label>
        <input type="number" placeholder="10" />
        <select name="País" id="">
          <option value="" disabled>
            Origen
          </option>
          <option value="">Argentina</option>
          <option value="">Brasil</option>
          <option value="">España</option>
          <option value="">Perú</option>
          <option value="">Portugal</option>
        </select>
        <label>Imagen:</label>
        <input value="" placeholder="Ingresa el enlace de la imagen" />
      </form>
    </div>
  );
};

export default AddPlayer;
