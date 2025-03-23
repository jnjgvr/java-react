import { loadPokemonList } from './pages/home.js';
import { loadPokemonTypeList } from './pages/typePage.js';
import { loadPokemonDetails } from './pages/details.js';

// Función para manejar la navegación entre páginas
function router(): void {
    const path: string = window.location.hash;

    if (path.startsWith('#pokemon/')) {
        const pokemonId: string = path.split('/')[1]; // Extrae el ID o nombre del Pokémon
        loadPokemonDetails(pokemonId);
    }else if(path.startsWith('#type/')){
        const type: string = path.split('/')[1];
        loadPokemonTypeList(0, type);
    } else {
        loadPokemonList();
    }
}

// Escuchar cambios en la URL (cuando se usa `window.location.hash`)
window.addEventListener('hashchange', router);

// Cargar la página inicial cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    router();
});
