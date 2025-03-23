export function loadTypesList(types) {
    const container = document.createElement("div");
    container.id = "types-container";
    const title = document.createElement("h3");
    title.textContent = "Filtrar por Tipo";
    container.appendChild(title);
    if (!types || !types.results) {
        console.error("Error al cargar los tipos de Pokémon.");
        return container;
    }
    types.results.forEach((type) => {
        if (type.name !== 'unknown') {
            const button = document.createElement("button");
            button.textContent = type.name;
            button.classList.add(`type-${type.name}`);
            button.onclick = () => {
                window.location.hash = `#type/${type.name}`;
            };
            container.appendChild(button);
        }
    });
    return container;
}
