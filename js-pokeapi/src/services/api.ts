const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Obtiene un listado de Pokémon con paginación.
 * @param {number} limit - Número de Pokémon por página.
 * @param {number} offset - Desde qué número comenzar.
 * @returns {Promise<any>} Datos de los Pokémon.
 */
export async function getPokemonList(limit: number = 20, offset: number = 0): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error("Error al obtener la lista de Pokémon");

        const data = await response.json();
        return [limit + offset >= data.count, data];
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Obtiene un listado de Pokémon con paginación en funcion del tipo.
 * @param {number} limit - Número de Pokémon por página.
 * @param {number} offset - Desde qué número comenzar.
 * @param {number} type - Tipo seleccionado.
 * @returns {Promise<any>} Datos de los Pokémon.
 */
export async function getPokemonTypeList(limit = 20, offset = 0, type: string): Promise<any[]> {
    try {
        const response = await fetch(`${BASE_URL}/type/${type}`);
        if (!response.ok) throw new Error("Error al obtener la lista de Pokémon");
        const data = await response.json();

        // Aplicar paginación con slice
        return [offset + limit >= data.pokemon.length, data.pokemon.slice(offset, offset + limit)];
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Obtiene los detalles de un Pokémon por nombre o ID.
 * @param {string} pokemonId - Nombre o ID del Pokémon.
 * @returns {Promise<any>} Datos del Pokémon.
 */
export async function getPokemonDetails(pokemonId: string): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${pokemonId}`).catch(() => null);

        if (!response || response.status === 404) return null;

        return await response.json();
    } catch {
        return null; // Manejo silencioso del error
    }
}

/**
 * Obtiene la lista de tipos disponibles.
 * @returns {Promise<any>} Lista de tipos.
 */
export async function getTypesList(): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/type/`);
        if (!response.ok) throw new Error(`No se encontró el listado`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}