var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPokemonList } from "../services/api.js";
import { getTypesList } from "../services/api.js";
import { createPagination } from "../components/pagination.js";
import { loadTypesList } from "../components/types.js";
const limit = 50; // Cantidad de Pokémon por página
export function loadPokemonList() {
    return __awaiter(this, arguments, void 0, function* (offset = 0) {
        document.body.innerHTML = ""; // Limpiamos la página
        const title = document.createElement("h2");
        title.textContent = "Lista de Pokémon";
        document.body.appendChild(title);
        const data = yield getPokemonList(limit, offset);
        const types = yield getTypesList();
        if (!data) {
            document.body.innerHTML += "<p>Error al cargar los Pokémon.</p>";
            return;
        }
        if (!types) {
            console.log('Error con los tipos');
            return;
        }
        const typesContainer = loadTypesList(types);
        document.body.appendChild(typesContainer);
        const list = document.createElement("div");
        data[1].results.forEach((pokemon) => {
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
    });
}
