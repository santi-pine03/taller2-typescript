import { Serie } from './Serie.js';

import {dataSeries} from './dataSeries.js';

let tableBody: HTMLElement = document.getElementById('seriesTabla')!;
const detailCard = document.getElementById('seriesDetalles');
function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((Serie) => { // 4. explicar el arrow function
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${Serie.name}</td>
                             <td>${Serie.channel}</td>
                             <td>${Serie.seasons}</td>`;
            trElement.addEventListener('click', () => {
            showSeriesDetails(Serie);
        });
        
        tableBody.appendChild(trElement);
    });
}

function showSeriesDetails(serie: Serie): void {
    const serieImagen = document.getElementById('serieImagen')!;
    const serieNombre = document.getElementById('serieNombre')!;
    const serieResumen = document.getElementById('serieResumen')!;
    
    serieImagen.innerHTML = `<img src="${serie.imagen}" alt="${serie.name}" class="img-fluid">`;
    serieNombre.textContent = `Nombre: ${serie.name}`;
    serieResumen.textContent = `Resumen: ${serie.resumen}`;
}

renderCoursesInTable(dataSeries);
