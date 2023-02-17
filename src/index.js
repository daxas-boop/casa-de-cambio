import {
  limitarInputFecha,
  mostrarTiposDeMonedas,
  mostrarTasasDeCambio,
  mostrarCargandoTasasDeCambio,
  esconderCargandoTasasDeCambio,
  mostrarCargandoMonedas,
  esconderCargandoMonedas,
} from './ui.js';
import { obtenerMonedas, traerTasasDeCambio } from './api.js';

function actualizarTasasDeCambio() {
  let fecha = document.querySelector('#fecha').value;
  let moneda = document.querySelector('.active').innerText;
  if (!fecha) fecha = undefined;
  if (!moneda) moneda = undefined;

  document.querySelector('#tasas').innerHTML = '';
  mostrarCargandoTasasDeCambio();
  traerTasasDeCambio(moneda, fecha).then((tasasDeCambio) => {
    mostrarTasasDeCambio(tasasDeCambio);
    esconderCargandoTasasDeCambio();
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
  mostrarCargandoMonedas();
  obtenerMonedas().then((monedas) => {
    mostrarTiposDeMonedas(monedas);
    esconderCargandoMonedas();
    manejarClickMoneda();
    manejarCambioDeFecha();
  });
}

inicializar();
