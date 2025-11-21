let cart = JSON.parse(localStorage.getItem("cart")) || [];

const table = document.getElementById("cartTable");

cart.forEach((p, index) => {
    table.innerHTML += `
            <tr>
                <td><img src="${p.img}" width="60"></td>
                <td>${p.name}</td>
                <td>${p.price}$</td>
                <td>
                    <button onclick="removeItem(${index})">X</button>
                </td>
            </tr>
        `;
});

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}



let cart2 = JSON.parse(localStorage.getItem("cart")) || [];

function activateAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach(btn => {

        btn.addEventListener("click", () => {
            const product = {
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: btn.dataset.price,
                img: btn.dataset.img
            };

            cart2.push(product);
            localStorage.setItem("cart", JSON.stringify(cart2));
        });

    });
}


const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            productsContainer.innerHTML += `
                <div class="product">
                    <img src="${product.image}">
                    <h3>${product.title}</h3>
                    <p class="price">${product.price}$</p>

                    <button class="add-to-cart"
                        data-id="${product.id}"
                        data-name="${product.title}"
                        data-price="${product.price}"
                        data-img="${product.image}"
                    >
                        add to cart
                    </button>
                </div>
            `;
        });

        activateAddToCartButtons();
    });