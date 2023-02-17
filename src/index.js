import { limitarInputFecha, mostrarTiposDeMonedas, mostrarTasasDeCambio } from './ui.js';
import { obtenerMonedas, traerTasasDeCambio } from './api.js';

function actualizarTasasDeCambio() {
  let fecha = document.querySelector('#fecha').value;
  let moneda = document.querySelector('.active').innerText;
  if (!fecha) fecha = undefined;
  if (!moneda) moneda = undefined;

  traerTasasDeCambio(moneda, fecha).then((tasasDeCambio) => {
    mostrarTasasDeCambio(tasasDeCambio);
  });
}

function manejarCambioDeFecha() {
  document.querySelector('#fecha').addEventListener('change', () => {
    actualizarTasasDeCambio();
  });
}

function manejarClickMoneda() {
  document.querySelector('#monedas').onclick = (e) => {
    if (document.querySelector('.active')) {
      document.querySelector('.active').classList.remove('active');
    }
    e.target.classList.add('active');
    actualizarTasasDeCambio();
  };
}

function inicializar() {
  limitarInputFecha();
  obtenerMonedas().then((monedas) => {
    mostrarTiposDeMonedas(monedas);
    manejarClickMoneda();
    manejarCambioDeFecha();
  });
}

inicializar();
