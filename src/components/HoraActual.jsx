import { useEffect, useState } from "react";

function HoraActual() {
  const [hora, setHora] = useState(new Date());
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch("https://worldtimeapi.org/api/timezone/America/Santiago")
    .then((res) => {
      if (!res.ok) throw new Error("No se pudo obtener la hora");
      return res.json();
    })
    .then((data) => {
      setHora(new Date(data.datetime));
      setError(null);
    })
    .catch((err) => setError(err.message));

  const intervalo = setInterval(() => {
    setHora((prev) => new Date(prev.getTime() + 1000));
  }, 1000);

  return () => clearInterval(intervalo);
}, []);

return (
  <div className="hora-container">
    <h3>Hora actual en Coronel 🇨🇱</h3>

    {error && !hora ? (
      <p style={{ color: "red" }}>Error: {error}</p>
    ) : (
      <p>
        {hora.toLocaleDateString("es-CL")} - {hora.toLocaleTimeString("es-CL")}
      </p>
    )}
  </div>
);

}

export default HoraActual;

