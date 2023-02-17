const URL_API = 'https://api.exchangerate.host/';

function traerTasasDeCambio(base = 'USD', fecha = 'latest') {
  return fetch(`${URL_API + fecha}?base=${base}`)
    .then((r) => r.json())
    .then((r) => r.rates);
}

function obtenerMonedas() {
  return traerTasasDeCambio().then((tasasDeCambio) => Object.keys(tasasDeCambio));
}

export { obtenerMonedas, traerTasasDeCambio };
