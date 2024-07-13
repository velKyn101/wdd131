const products = [
    {id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5},
    {id: "fc-2050", name: "Power Laces", averagerating: 4.7},
    {id: "fs-1987", name: "Time Circuits", averagerating: 3.5},
    {id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9},
    {id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0}
];


function populateSelect(select, product) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector("select");
    populateSelect(select, products);

    // Increment the count only when the form is submitted
    const form = document.querySelector("form");
    form.addEventListener("submit", () => {
        let count = parseInt(localStorage.getItem('reviewCount')) || 0;
        count++;
        localStorage.setItem('reviewCount', count);
    });

    // Set current year and last modified date in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});