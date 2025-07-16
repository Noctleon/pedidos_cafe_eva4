function ReservaList({ reservas, setReservas }) {
  const handleEliminar = (id) => {
    setReservas(reservas.filter((r) => r.id !== id));
  };

  const handleMarcar = (id) => {
    setReservas(
      reservas.map((r) =>
        r.id === id ? { ...r, comprado: !r.comprado } : r
      )
    );
  };

  if (reservas.length === 0) {
    return (
      <div className="bloque-reservas">
        <h2>Reservas actuales</h2>
        <p>No hay reservas registradas.</p>
      </div>
    );
  }

  return (
    <div className="bloque-reservas">
      <h2>Reservas actuales</h2>
      <ul>
        {reservas.map((reserva) => (
          <li
            key={reserva.id}
            style={{
              textDecoration: reserva.comprado ? "line-through" : "none",
              color: reserva.comprado ? "gray" : "white",
              marginBottom: "10px",
              border: "1px solid gold",
              padding: "10px",
              borderRadius: "6px",
              backgroundColor: "#1a1a1a",
            }}
          >
            <strong>Pedido #{reserva.numeroPedido}</strong><br />
            Cliente: {reserva.nombreCliente}<br />
            Café: {reserva.cafe} - Cantidad: {reserva.cantidad}<br />
            Hora: {reserva.horaRecogida}<br />
            {reserva.notas && <>Notas: {reserva.notas}<br /></>}

            <button onClick={() => handleMarcar(reserva.id)}>
              {reserva.comprado ? "Desmarcar" : "Entregado"}
            </button>
            <button onClick={() => handleEliminar(reserva.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default ReservaList;
