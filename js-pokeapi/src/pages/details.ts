import { getPokemonDetails } from "../services/api.js";
import { createPagination } from "../components/pagination.js";

export async function loadPokemonDetails(pokemonId: string): Promise<void> {
    document.body.innerHTML = ""; // Limpiamos la página

    const title = document.createElement("h2");
    title.textContent = "Cargando detalles...";
    document.body.appendChild(title);

    const pokemon = await getPokemonDetails(pokemonId);

    if (!pokemon) {
        document.body.innerHTML = "<p>No se pudo cargar el Pokémon.</p>";
        return;
    }

    // Detalles del Pokémon
    document.body.innerHTML = "";

    const header = document.createElement("h2");
    header.textContent = pokemon.name.toUpperCase();
    document.body.appendChild(header);

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    document.body.appendChild(image);

    const details = document.createElement("p");
    details.innerHTML = `
        <p>Altura: ${pokemon.height / 10} m</p>
        <p>Peso: ${pokemon.weight / 10} kg</p>
        <p>Tipos: ${pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
    `;
    document.body.appendChild(details);

    // Volver a la lista
    const backLink = document.createElement("a");
    backLink.href = "#";
    backLink.textContent = "Volver a la lista";
    document.body.appendChild(backLink);

    //Limite establecido para evitar errores por consola de la paginacion al no encontrar el siguiente pokemon
    let pkmPrevID = (pokemon.id === 10001)?1025:pokemon.id - 1;
    let pkmNextID = (pokemon.id === 1025)?10001:pokemon.id + 1;
    let pkmNext = null;
    let pkmPrev = null;
    if(10278>pkmNextID){
        pkmNext = await getPokemonDetails(pkmNextID.toString());
    }
    if(pokemon.id > 1){
        pkmPrev = await getPokemonDetails(pkmPrevID.toString());
    }

    // Agregar la paginación
    const pagination = createPagination(0, 0, () => 0, false, [pkmPrev?pkmPrev.name:null, pokemon.name, pkmNext?pkmNext.name:null]);
    document.body.appendChild(pagination);
}