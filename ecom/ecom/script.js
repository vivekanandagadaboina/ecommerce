// script.js

function addToCart(productName, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: parseFloat(price),
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTotal();
}

function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-total').innerText = totalQuantity;
}

function buyNow(productName, price, image) {
    addToCart(productName, price, image);
    window.location.href = "cart.html";
}

window.onload = updateCartTotal;
