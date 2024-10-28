import { dataSeries } from './dataSeries.js';

var tableBody = document.getElementById('seriesTabla');
var detailCard = document.getElementById('seriesDetalles');
renderSeriesInTable(dataSeries);
displayAverage(dataSeries); 

function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = `<td class="bold-column">${index + 1}</td>
                               <td class="blue-name">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        trElement.addEventListener('click', function () {
        showSeriesDetails(serie); // Mostrar detalles de la serie
    });
        tableBody.appendChild(trElement);
    });
    
}

function showSeriesDetails(serie){
    const serieImagen = document.getElementById('serieImagen');
    const serieNombre = document.getElementById('serieNombre');
    const serieResumen = document.getElementById('serieResumen');
    const serieLink = document.getElementById('serieLink');
    const detailCard = document.getElementById('seriesDetalles'); // Obtén el contenedor de detalles

    if (serieImagen && serieNombre && serieResumen && detailCard) {
        console.log(`Mostrando detalles para: ${serie.name}`);

        serieImagen.innerHTML = `<img src="${serie.imagen}" alt="${serie.name}" class="img-fluid">`;
        serieNombre.textContent = `${serie.name}`;
        serieResumen.textContent = `${serie.resumen}`;
        serieLink.innerHTML = `<a href="${serie.link}" target="_blank">${serie.link}</a>`;


        detailCard.style.display = 'block';
    } else {
        console.error('No se encontraron los elementos de detalle en el DOM');
    }
}


function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((sum, show) => sum + show.seasons, 0);
    return totalSeasons / series.length; 
}



function displayAverage(series) {
    const average = Math.round(calculateAverageSeasons(series)); 
    const averageRow = document.createElement("tr");
    averageRow.style.backgroundColor = "white";
    averageRow.innerHTML = `<td colspan="3">Seasons average: ${average}</td>`;
    tableBody.appendChild(averageRow); 
}






