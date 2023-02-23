function mostrarTiposDeMonedas(monedas) {
  const $contenedorMonedas = document.querySelector('#monedas');
  monedas.forEach((moneda) => {
    const $botonMoneda = document.createElement('a');
    $botonMoneda.className = 'list-group-item list-group-item-action pointer';
    $botonMoneda.innerText = moneda;
    $contenedorMonedas.appendChild($botonMoneda);
  });
}

function limitarInputFecha() {
  const today = new Date();
  const minDate = today.toISOString().substring(0, 10);
  document.querySelector('#fecha').setAttribute('max', minDate);
}

function mostrarTasasDeCambio(tasasDeCambio) {
  const monedas = Object.keys(tasasDeCambio);
  const $tabla = document.querySelector('#tasas');
  $tabla.innerHTML = '';
  monedas.forEach((moneda) => {
    const $fila = document.createElement('tr');
    const $moneda = document.createElement('td');
    const $tasa = document.createElement('td');
    $moneda.innerText = moneda;
    $tasa.innerText = tasasDeCambio[moneda];
    $fila.appendChild($moneda);
    $fila.appendChild($tasa);
    $tabla.appendChild($fila);
  });
}

function mostrarCargandoMonedas() {
  document.querySelector('#cargando-monedas').classList.remove('escondido');
}

function esconderCargandoMonedas() {
  document.querySelector('#cargando-monedas').classList.add('escondido');
}

function mostrarCargandoTasasDeCambio() {
  document.querySelector('#cargando-tasas').classList.remove('escondido');
}

function esconderCargandoTasasDeCambio() {
  document.querySelector('#cargando-tasas').classList.add('escondido');
}

export {
  limitarInputFecha,
  mostrarTiposDeMonedas,
  mostrarTasasDeCambio,
  mostrarCargandoMonedas,
  esconderCargandoMonedas,
  mostrarCargandoTasasDeCambio,
  esconderCargandoTasasDeCambio,
};
