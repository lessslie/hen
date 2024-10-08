// script.js
let cart = [];

// function to add product to cart
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
        cart.push(product);
            updateCart();
            }

            // function to update cart display
            function updateCart() {
                const cartContainer = document.getElementById("cart-container");
                    cartContainer.innerHTML = "";
                        cart.forEach((product) => {
                                const cartItem = document.createElement("li");
                                        cartItem.innerHTML = `
                                                    <span>${product.name}</span>
                                                                <span>$${product.price}</span>
                                                                            <button class="remove-btn" data-product-id="${product.id}">Remove</button>
                                                                                    `;
                                                                                            cartContainer.appendChild(cartItem);
                                                                                                });
                                                                                                   