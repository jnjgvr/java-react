var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPokemonTypeList } from "../services/api.js";
import { getTypesList } from "../services/api.js";
import { createPagination } from "../components/pagination.js";
import { loadTypesList } from "../components/types.js";
const limit = 50; // Cantidad de Pokémon por página
let selectedType = '';
export function loadPokemonTypeList() {
    return __awaiter(this, arguments, void 0, function* (offset = 0, type) {
        document.body.innerHTML = ""; // Limpiamos la página
        selectedType = type;
        const title = document.createElement("h2");
        title.textContent = "Lista de Pokémon " + type;
        document.body.appendChild(title);
        const data = yield getPokemonTypeList(limit, offset, type);
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
        let btnTypeSelected = document.querySelector(`.type-${type}`);
        btnTypeSelected.disabled = true;
        const list = document.createElement("div");
        data[1].forEach((item) => {
            const link = document.createElement("a");
            link.href = `#pokemon/${item.pokemon.name}`;
            link.textContent = item.pokemon.name;
            link.style.display = "block";
            list.appendChild(link);
        });
        document.body.appendChild(list);
        if (data[1].length === 0) {
            const title = document.createElement("p");
            title.textContent = "No se encontraron pokemon tipo  " + type;
            document.body.appendChild(title);
        }
        let lastResults = data[0];
        const pagination = createPagination(offset, limit, reloadPagination, lastResults);
        document.body.appendChild(pagination);
    });
}
const reloadPagination = (offset) => {
    loadPokemonTypeList(offset, selectedType);
};
