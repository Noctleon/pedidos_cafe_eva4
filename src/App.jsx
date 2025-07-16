import { useState, useEffect } from "react";
import ReservaForm from "./components/ReservaForm";
import ReservaList from "./components/ReservaList";
import PerroRandom from "./components/PerroRandom";
import HoraActual from "./components/HoraActual";

function App() {
  const [reservas, setReservas] = useState(() => {
    const datosGuardados = localStorage.getItem("reservas_cafe");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [contadorPedidos, setContadorPedidos] = useState(() => {
    const contadorGuardado = localStorage.getItem("contador_pedidos");
    return contadorGuardado ? parseInt(contadorGuardado, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("reservas_cafe", JSON.stringify(reservas));
    localStorage.setItem("contador_pedidos", contadorPedidos.toString());
  }, [reservas, contadorPedidos]);

  return (
    <div className="app">
      <h1>Pedidos de Café</h1>

      <ReservaForm
        reservas={reservas}
        setReservas={setReservas}
        contadorPedidos={contadorPedidos}
        setContadorPedidos={setContadorPedidos}
      />

      <ReservaList reservas={reservas} setReservas={setReservas} />

      <PerroRandom />
      <HoraActual />
    </div>
  );
}

export default App;

