import { getPokemonList } from "../services/api.js";
import { getTypesList } from "../services/api.js";
import { createPagination } from "../components/pagination.js";
import { loadTypesList } from "../components/types.js"; 

const limit = 50; // Cantidad de Pokémon por página

export async function loadPokemonList(offset: number = 0): Promise<void> {
    document.body.innerHTML = ""; // Limpiamos la página

    const title = document.createElement("h2");
    title.textContent = "Lista de Pokémon";
    document.body.appendChild(title);

    const data = await getPokemonList(limit, offset);
    const types = await getTypesList();

    if (!data) {
        document.body.innerHTML += "<p>Error al cargar los Pokémon.</p>";
        return;
    }

    if(!types){
        console.log('Error con los tipos');
        return;
    }

    const typesContainer = loadTypesList(types);
    document.body.appendChild(typesContainer);

    const list = document.createElement("div");

    data[1].results.forEach((pokemon: { name: string }) => {
        const link = document.createElement("a");
        link.href = `#pokemon/${pokemon.name}`;
        link.textContent = pokemon.name;
        link.style.display = "block";
        list.appendChild(link);
    });

    document.body.appendChild(list);

    let lastResults = data[0];
    // Agregar la paginación
    const pagination = createPagination(offset, limit, loadPokemonList, lastResults);
    document.body.appendChild(pagination);
}
