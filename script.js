// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buscarVuelosBtn = document.getElementById('buscarVuelosBtn');
    const origenInput = document.getElementById('origen');
    const destinoInput = document.getElementById('destino');
    const fechaVueloInput = document.getElementById('fecha_vuelo');
    const resultadosVuelosDiv = document.getElementById('resultadosVuelos');

    // Datos simulados de vuelos (en un proyecto real, esto vendría de una base de datos)
    const vuelosDisponibles = [
        { id: 1, origen: "Madrid", destino: "París", fecha: "2025-09-15", plazas: 100, precio: 250 },
        { id: 2, origen: "París", destino: "Londres", fecha: "2025-09-20", plazas: 50, precio: 180 },
        { id: 3, origen: "Madrid", destino: "Roma", fecha: "2025-10-01", plazas: 120, precio: 300 },
        { id: 4, origen: "Barcelona", destino: "París", fecha: "2025-09-15", plazas: 30, precio: 280 }
    ];

    buscarVuelosBtn.addEventListener('click', () => {
        const origen = origenInput.value.toLowerCase();
        const destino = destinoInput.value.toLowerCase();
        const fecha = fechaVueloInput.value;

        // Filtrar vuelos
        const vuelosFiltrados = vuelosDisponibles.filter(vuelo => {
            const matchOrigen = origen === "" || vuelo.origen.toLowerCase().includes(origen);
            const matchDestino = destino === "" || vuelo.destino.toLowerCase().includes(destino);
            const matchFecha = fecha === "" || vuelo.fecha === fecha;
            return matchOrigen && matchDestino && matchFecha;
        });

        // Mostrar resultados en el DOM
        resultadosVuelosDiv.innerHTML = ''; // Limpiar resultados anteriores
        if (vuelosFiltrados.length === 0) {
            resultadosVuelosDiv.innerHTML = '<p>No se encontraron vuelos con esos criterios.</p>';
        } else {
            vuelosFiltrados.forEach(vuelo => {
                const vueloDiv = document.createElement('div');
                vueloDiv.classList.add('vuelo-item'); // Para estilizar con CSS
                vueloDiv.innerHTML = `
                    <h3>Vuelo de ${vuelo.origen} a ${vuelo.destino}</h3>
                    <p>Fecha: ${vuelo.fecha}</p>
                    <p>Precio: $${vuelo.precio} | Plazas: ${vuelo.plazas}</p>
                    <button>Reservar</button>
                `;
                resultadosVuelosDiv.appendChild(vueloDiv);
            });
        }
    });
});