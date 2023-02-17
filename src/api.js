const URL_API = 'https://api.exchangerate.host/';

function traerTasasdeCambio(base = 'USD', fecha = 'latest') {
  return fetch(`${URL_API + fecha}?base=${base}`)
    .then((r) => r.json())
    .then((r) => r);
}

function obtenerMonedas() {
  return traerTasasdeCambio().then((tasasDeCambio) => Object.keys(tasasDeCambio.rates));
}

export { obtenerMonedas };
