const productName = document.querySelector("#productNameInput");
const productImageInput = document.querySelector("#productImageInput");
const productDescriptionInput = document.querySelector("#productDescriptionInput");
const addButton = document.querySelector("#addProductButton");
const productList = document.querySelector("#productList");
let element = [];
let hidden = [];
let count = 1;
let inner = '';
const productObj = {};

addButton.addEventListener("click", () => {
    const checkInput = (element) => {
        return element.value;
    }

    if (checkInput(productName) && checkInput(productImageInput) && checkInput(productDescriptionInput)) {
        productObj[`id${count}`] = {
            name: checkInput(productName),
            img: checkInput(productImageInput),
            description: checkInput(productDescriptionInput),
        }

        inner += `
            <div class="element${count} element" data-id="element${count}">
                <span>${count}</span>
                <div class="product-info">
                    <p>${productObj[`id${count}`].name}</p>
                    <p>${productObj[`id${count}`].description}</p>
                </div>
            </div>
            <div class="element-hidden" id="element${count}">
                <img class="image" src="${productObj[`id${count}`].img}" alt="${productObj[`id${count}`].description}">
                <p>${productObj[`id${count}`].name}</p>
                <p>${productObj[`id${count}`].description}</p>
            </div>
        `;
        count++;
        productName.value = "";
        productDescriptionInput.value = "";
        productImageInput.value = "";
    } else {
        alert("Please fill all fields!");
    }

    productList.innerHTML = inner;
    element = document.querySelectorAll(".element");
    hidden = document.querySelectorAll(".element-hidden");
    console.log(hidden);
});

document.addEventListener("click", (event) => {
    if (event.target.closest(".element")) {
        const elementId = event.target.closest(".element").getAttribute("data-id");
        hidden.forEach((el) => {
            if (elementId === el.id) {
                el.style.cssText = `display: block; width: 300px; height: 300px;`;
            } else {
                el.style.cssText = `display: none;`;
            }
        });
    } else {
        hidden.forEach((el) => {
            el.style.cssText = `display: none;`;
        });
    }
});