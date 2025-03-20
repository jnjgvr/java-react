"use strict";
let pushItems = document.querySelector(".push-btn");
let unshiftItems = document.querySelector(".unshift-btn");
let insertItems = document.querySelector(".insert-btn");
let popItems = document.querySelector(".pop-btn");
let shiftItems = document.querySelector(".shift-btn");
let removeItems = document.querySelector(".remove-btn");
let listItemHTML = document.querySelector(".array-list ul");
let exampleHTML = document.createElement('li');
const iconList = ['🍓', '🍋', '🍍', '🍇', '🍈', '🍎', '🍌', '🍉'];
const getRandomFruit = () => {
    return iconList[Math.floor(Math.random() * iconList.length)];
};
let listItems = [];
pushItems === null || pushItems === void 0 ? void 0 : pushItems.addEventListener("click", (() => {
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
unshiftItems === null || unshiftItems === void 0 ? void 0 : unshiftItems.addEventListener("click", (() => {
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
insertItems === null || insertItems === void 0 ? void 0 : insertItems.addEventListener("click", (() => {
    if (listItems.length <= 14) {
        let insertPositionInput = document.querySelector("#insert-position");
        let insertPosition = parseInt(insertPositionInput.value);
        let randomFruit = getRandomFruit();
        listItems.splice(insertPosition, 0, randomFruit);
        const newItem = document.createElement("li");
        newItem.textContent = randomFruit;
        if (insertPosition >= listItemHTML.children.length) {
            listItemHTML.appendChild(newItem); // Si es mayor al tamaño, agregar al final
        }
        else {
            listItemHTML.children[insertPosition].before(newItem);
        }
        animateItem(newItem, "down"); // Aplicar animación
        updateUI();
    }
}));
popItems === null || popItems === void 0 ? void 0 : popItems.addEventListener("click", (() => {
    if (listItems.length > 0) {
        listItems.pop();
        removeItemAtIndex(listItems.length);
        updateUI();
    }
}));
shiftItems === null || shiftItems === void 0 ? void 0 : shiftItems.addEventListener("click", (() => {
    if (listItems.length > 0) {
        listItems.shift();
        removeItemAtIndex(0);
        updateUI();
    }
}));
removeItems === null || removeItems === void 0 ? void 0 : removeItems.addEventListener("click", (() => {
    if (listItems.length > 0) {
        let removePositionInput = document.querySelector("#remove-position");
        let removePosition = parseInt(removePositionInput.value);
        if (removePosition <= listItems.length) {
            listItems.splice(removePosition, 1);
            removeItemAtIndex(removePosition);
        }
        else {
            listItems.pop();
            removeItemAtIndex(listItems.length);
        }
        updateUI();
    }
}));
const updateUI = () => {
    console.log(listItems);
    shiftItems.disabled = popItems.disabled = removeItems.disabled = listItems.length === 0;
    pushItems.disabled = unshiftItems.disabled = insertItems.disabled = listItems.length === 14;
};
const animateItem = (element, direction) => {
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
const removeItemAtIndex = (index) => {
    if (listItemHTML.children.length > index) {
        const itemToRemove = listItemHTML.children[index];
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
