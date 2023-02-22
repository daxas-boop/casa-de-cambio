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

function obtenerFechaSeleccionada() {
  const fecha = document.querySelector('#fecha').value;
  return fecha ? fecha : undefined;
}

function obtenerMonedaSeleccionada() {
  const $moneda = document.querySelector('.active');
  return $moneda ? $moneda.innerText : undefined;
}

function actualizarTasasDeCambio() {
  const fecha = obtenerFechaSeleccionada();
  const moneda = obtenerMonedaSeleccionada();
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
