let pushItems = document.querySelector(".push-btn") as HTMLInputElement;
let unshiftItems = document.querySelector(".unshift-btn") as HTMLInputElement;
let insertItems = document.querySelector(".insert-btn") as HTMLInputElement;
let popItems = document.querySelector(".pop-btn") as HTMLInputElement;
let shiftItems = document.querySelector(".shift-btn") as HTMLInputElement;
let removeItems = document.querySelector(".remove-btn") as HTMLInputElement;

let listItemHTML = document.querySelector(".array-list ul") as HTMLUListElement;
let exampleHTML = document.createElement('li');

const iconList: string[] = ['🍓', '🍋', '🍍', '🍇', '🍈', '🍎', '🍌', '🍉'];
const getRandomFruit = () => {
    return iconList[Math.floor(Math.random() * iconList.length)];
};

let listItems: any = [];
pushItems?.addEventListener("click", (() => {
    if (listItems.length <= 14) {
        let randomFruit = getRandomFruit();
        listItems.push(randomFruit);
        const newItem = document.createElement("li");
        newItem.textContent = randomFruit;
        listItemHTML.appendChild(newItem);
        animateItem(newItem, "down"); // Aplicar animación
        updateUI();
    }
}));

unshiftItems?.addEventListener("click", (() => {
    if (listItems.length <= 14) {
        let randomFruit = getRandomFruit();
        listItems.unshift(randomFruit);
        const newItem = document.createElement("li");
        newItem.textContent = randomFruit;
        listItemHTML.prepend(newItem);
        animateItem(newItem, "down"); // Aplicar animación
        updateUI();
    }
}));

insertItems?.addEventListener("click", (() => {
    if (listItems.length <= 14) {
        let insertPositionInput = document.querySelector("#insert-position") as HTMLInputElement;
        let insertPosition = parseInt(insertPositionInput.value);

        let randomFruit = getRandomFruit();
        listItems.splice(insertPosition, 0, randomFruit);
        const newItem = document.createElement("li");
        newItem.textContent = randomFruit;

        if (insertPosition >= listItemHTML.children.length) {
            listItemHTML.appendChild(newItem); // Si es mayor al tamaño, agregar al final
        } else {
            listItemHTML.children[insertPosition].before(newItem);
        }
        animateItem(newItem, "down"); // Aplicar animación
        updateUI();
    }
}));

popItems?.addEventListener("click", (() => {
    if (listItems.length > 0) {
        listItems.pop();
        removeItemAtIndex(listItems.length);
        updateUI();
    }
}));

shiftItems?.addEventListener("click", (() => {
    if (listItems.length > 0) {
        listItems.shift();
        removeItemAtIndex(0);
        updateUI();
    }
}));

removeItems?.addEventListener("click", (() => {
    if (listItems.length > 0) {
        let removePositionInput = document.querySelector("#remove-position") as HTMLInputElement;
        let removePosition = parseInt(removePositionInput.value);

        if(removePosition <= listItems.length){
            listItems.splice(removePosition, 1);
            removeItemAtIndex(removePosition);
        } else {
            listItems.pop();
            removeItemAtIndex(listItems.length);
        }

        updateUI();
    }
}));



const updateUI = () => {
    console.log(listItems)
    shiftItems.disabled = popItems.disabled = removeItems.disabled = listItems.length === 0;
    pushItems.disabled = unshiftItems.disabled = insertItems.disabled = listItems.length === 14;
}

const animateItem = (element: HTMLLIElement, direction: "up" | "down") => {
    element.style.position = "relative"; // Permitir la animación de movimiento
    element.animate([
        { transform: "translateY(50px) scale(0.5)", opacity: 0 },
        { transform: "translateY(0) scale(1)", opacity: 1 }
    ], {
        duration: 500,
        easing: "ease-out"
    });

    if (direction === "down") {
        element.animate([
            { transform: "translateY(-50px)" },
            { transform: "translateY(0)" }
        ], {
            duration: 500,
            easing: "ease-out"
        });
    }
};

const removeItemAtIndex = (index: number) => {
    if (listItemHTML.children.length > index) {
        const itemToRemove = listItemHTML.children[index] as HTMLLIElement;

        // Animación de salida (desvanecer y moverse arriba)
        itemToRemove.animate([
            { transform: "translateY(0) scale(1)", opacity: 1 },
            { transform: "translateY(50px) scale(0)", opacity: 0 }
        ], {
            duration: 500,
            easing: "ease-in-out"
        }).onfinish = () => {
            itemToRemove.remove();
        };
    }
};