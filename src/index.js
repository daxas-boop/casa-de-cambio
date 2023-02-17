import { limitarInputFecha, mostrarTiposDeMonedas } from './ui.js';
import { obtenerMonedas } from './api.js';

function inicializar() {
  limitarInputFecha();
  obtenerMonedas().then((monedas) => {
    mostrarTiposDeMonedas(monedas);
  });
}

inicializar();
