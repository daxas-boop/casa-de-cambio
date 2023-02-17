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
  const keys = Object.keys(tasasDeCambio);
  const $contenedorTasa = document.querySelector('#tasas');
  $contenedorTasa.innerHTML = '';
  keys.forEach((key) => {
    const $separador = document.createElement('tr');
    const $divisa = document.createElement('td');
    const $tasa = document.createElement('td');
    $divisa.innerText = key;
    $tasa.innerText = tasasDeCambio[key];
    $separador.appendChild($divisa);
    $separador.appendChild($tasa);
    $contenedorTasa.appendChild($separador);
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
