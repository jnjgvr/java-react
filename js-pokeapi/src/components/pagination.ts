export function createPagination(
    offset: number,
    limit: number,
    loadFunction: (arg: any) => void, // Puede ser loadPokemonList o loadPokemonDetails
    lastResults: boolean = false,
    currentItem: string[] | null = null // Solo para navegación en detalles
): HTMLElement {
    const paginationContainer = document.createElement("div");

    if (currentItem) {
        const prevButton = document.createElement("button");
        if(currentItem[0] === null){
            prevButton.disabled = true;
        }
        prevButton.textContent = "Anterior";
        prevButton.onclick = () => {
            window.location.hash = `#pokemon/${currentItem[0]}`;
        };
        paginationContainer.appendChild(prevButton);

        const nextButton = document.createElement("button");
        if (currentItem[currentItem.length - 1] === null) {
            nextButton.disabled = true;
        }
        nextButton.textContent = "Siguiente";
        nextButton.onclick = () => {
            window.location.hash = `#pokemon/${currentItem[currentItem.length - 1]}`;
        };
        paginationContainer.appendChild(nextButton);
    } else {
        // Estamos en la lista de Pokémon, paginamos la lista
        const prevButton = document.createElement("button");
        prevButton.textContent = "Anterior";
        prevButton.disabled = offset === 0;
        prevButton.onclick = () => {
            loadFunction(offset - limit);
        };
        paginationContainer.appendChild(prevButton);

        const nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente";
        nextButton.disabled = lastResults;
        nextButton.onclick = () => {
            loadFunction(offset + limit);
        };
        paginationContainer.appendChild(nextButton);
    }

    return paginationContainer;
}
