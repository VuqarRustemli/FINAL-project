function getProducts() {

    fetch("http://195.26.245.5:9505/api/products")
        .then(response => {
            return response.json();
        })
        .then(products => {
            // console.log(products);

            displayProducts(products);
        })
}

getProducts();

function displayProducts(products) {

    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    products.forEach(element => {
        const product = document.createElement('div');
        product.classList.add('product');
        product.setAttribute('data-id', element.id);

        const product_img = document.createElement('div');
        product_img.classList.add('product-img');

        const img = document.createElement('img');
        img.src = element.imageUrl;

        const product_detail = document.createElement('div');
        product_detail.classList.add('product-detail');

        const model = document.createElement('p');
        model.classList.add('model');
        model.textContent = element.model;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = element.price + '$';

        const rate = document.createElement('p');
        let stars = '';
        for (let i = 0; i < element.averageRating; i++) {
            stars += '<i class="fa-solid fa-star"></i>';
        }
        rate.innerHTML = stars;

        const btn = document.createElement('button');
        btn.textContent = "Add to Cart";
        btn.setAttribute('data-id', element.id);

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            let productId = btn.getAttribute('data-id')
            console.log(productId);
            addToCart(productId);
        })

        product.appendChild(product_img);
        product_img.appendChild(img);
        product.appendChild(product_detail);
        product_detail.appendChild(model);
        product_detail.appendChild(price);
        product_detail.appendChild(rate);
        product.appendChild(btn);
        productsContainer.appendChild(product);
    });
}


function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // eyni məhsuldan yenidən əlavə olunanda quantity artır
    let existing = cart.find(p => p.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}