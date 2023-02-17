function mostrarTiposDeMonedas(monedas) {
  const $contenedorMonedas = document.querySelector('#monedas');
  monedas.forEach((moneda) => {
    const $botonMoneda = document.createElement('a');
    $botonMoneda.className = 'list-group-item list-group-item-action';
    $botonMoneda.innerText = moneda;
    $contenedorMonedas.appendChild($botonMoneda);
  });
}

function limitarInputFecha() {
  const today = new Date();
  const minDate = today.toISOString().substring(0, 10);
  document.querySelector('#fecha').setAttribute('max', minDate);
}

export { limitarInputFecha, mostrarTiposDeMonedas };
