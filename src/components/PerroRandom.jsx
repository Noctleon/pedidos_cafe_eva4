import { useState, useEffect } from "react";

function PerroRandom() {
  const [imagenPerro, setImagenPerro] = useState(null);
  const [error, setError] = useState(null);

  const cargarImagen = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar la imagen");
        return res.json();
      })
      .then((data) => {
        setImagenPerro(data.message);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    cargarImagen();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>🐶 Imagen de un perro aleatorio</h3>
      <button onClick={cargarImagen}>Cargar otro</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imagenPerro && (
        <img src={imagenPerro} alt="Perro aleatorio" className="imagen-perro" />
      )}
    </div>
  );
}



export default PerroRandom;
