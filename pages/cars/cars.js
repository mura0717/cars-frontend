import { API_URL } from "../../settings.js"
const URL = API_URL + "/cars/admin"


export async function initCars() {
    const cars = await getCars();
    const tableRowContent = document.querySelector("#table-rows");
    cars.forEach(car => {
        let row = document.createElement("tr");
        addChildToElement(row, car.id);
        addChildToElement(row, car.brand);
        addChildToElement(row, car.model);
        addChildToElement(row, car.pricePrDay);
        addChildToElement(row, car.bestDiscount);
        tableRowContent.appendChild(row);
    });
}

function addChildToElement(element, value) {
    let rowElement = document.createElement("td");
    rowElement.textContent = value
    element.appendChild(rowElement);
}

async function getCars() {
    return await fetch(URL)
        .then(res => res.json())
}
