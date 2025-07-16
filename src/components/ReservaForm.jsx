import { useState, useEffect } from "react";

function ReservaForm({ reservas, setReservas }) {
  const [nombreCliente, setNombreCliente] = useState("");
  const [cafe, setCafe] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [horaRecogida, setHoraRecogida] = useState("");
  const [notas, setNotas] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    if (editandoId !== null) {
      const reservaEditar = reservas.find(r => r.id === editandoId);
      if (reservaEditar) {
        setNombreCliente(reservaEditar.nombreCliente);
        setCafe(reservaEditar.cafe);
        setCantidad(reservaEditar.cantidad);
        setHoraRecogida(reservaEditar.horaRecogida);
        setNotas(reservaEditar.notas);
      }
    }
  }, [editandoId, reservas]);

  const handleAgregar = () => {
    if (!nombreCliente || !cafe || !cantidad || !horaRecogida) return;

    const nuevaReserva = {
      id: editandoId !== null ? editandoId : Date.now(),
      nombreCliente,
      cafe,
      cantidad,
      horaRecogida,
      notas,
      comprado: false,
    };

    if (editandoId !== null) {
      setReservas(prev => prev.map(r => r.id === editandoId ? nuevaReserva : r));
      setEditandoId(null);
    } else {
      setReservas(prev => [...prev, nuevaReserva]);
    }

    setNombreCliente("");
    setCafe("");
    setCantidad("");
    setHoraRecogida("");
    setNotas("");
  };

  return (
    <div className="reserva-form">
      <h3>Reservar café ☕</h3>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombreCliente}
        onChange={e => setNombreCliente(e.target.value)}
      />
      <select value={cafe} onChange={e => setCafe(e.target.value)}>
        <option value="">Seleccione un café</option>
        <option value="Espresso">Espresso</option>
        <option value="Capuchino">Capuchino</option>
        <option value="Latte">Latte</option>
        <option value="Americano">Americano</option>
        <option value="Mocha">Mocha</option>
      </select>
      <input
        type="number"
        placeholder="Cantidad"
        min={1}
        value={cantidad}
        onChange={e => setCantidad(e.target.value)}
      />
      <input
        type="time"
        value={horaRecogida}
        onChange={e => setHoraRecogida(e.target.value)}
      />
      <input
        type="text"
        placeholder="Notas (opcional)"
        value={notas}
        onChange={e => setNotas(e.target.value)}
      />
      <button onClick={handleAgregar}>
        {editandoId !== null ? "Actualizar" : "Agregar"}
      </button>
    </div>
  );
}

export default ReservaForm;
