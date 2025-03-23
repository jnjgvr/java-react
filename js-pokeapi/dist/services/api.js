var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://pokeapi.co/api/v2";
/**
 * Obtiene un listado de Pokémon con paginación.
 * @param {number} limit - Número de Pokémon por página.
 * @param {number} offset - Desde qué número comenzar.
 * @returns {Promise<any>} Datos de los Pokémon.
 */
export function getPokemonList() {
    return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0) {
        try {
            const response = yield fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
            if (!response.ok)
                throw new Error("Error al obtener la lista de Pokémon");
            const data = yield response.json();
            return [limit + offset >= data.count, data];
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
/**
 * Obtiene un listado de Pokémon con paginación en funcion del tipo.
 * @param {number} limit - Número de Pokémon por página.
 * @param {number} offset - Desde qué número comenzar.
 * @param {number} type - Tipo seleccionado.
 * @returns {Promise<any>} Datos de los Pokémon.
 */
export function getPokemonTypeList() {
    return __awaiter(this, arguments, void 0, function* (limit = 20, offset = 0, type) {
        try {
            const response = yield fetch(`${BASE_URL}/type/${type}`);
            if (!response.ok)
                throw new Error("Error al obtener la lista de Pokémon");
            const data = yield response.json();
            // Aplicar paginación con slice
            return [offset + limit >= data.pokemon.length, data.pokemon.slice(offset, offset + limit)];
        }
        catch (error) {
            console.error(error);
            return [];
        }
    });
}
/**
 * Obtiene los detalles de un Pokémon por nombre o ID.
 * @param {string} pokemonId - Nombre o ID del Pokémon.
 * @returns {Promise<any>} Datos del Pokémon.
 */
export function getPokemonDetails(pokemonId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/pokemon/${pokemonId}`).catch(() => null);
            if (!response || response.status === 404)
                return null;
            return yield response.json();
        }
        catch (_a) {
            return null; // Manejo silencioso del error
        }
    });
}
/**
 * Obtiene la lista de tipos disponibles.
 * @returns {Promise<any>} Lista de tipos.
 */
export function getTypesList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/type/`);
            if (!response.ok)
                throw new Error(`No se encontró el listado`);
            return yield response.json();
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
