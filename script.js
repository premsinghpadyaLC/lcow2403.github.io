// Fetch product data
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
    })
    .catch(error => console.error('Error fetching products:', error));
 
// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}
 
// Function to add items to the cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
 
// Function to update the cart display
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = ''; // Clear existing cart contents
 
    const productIds = cart.reduce((acc, id) => {
        acc[id] = acc[id] ? acc[id] + 1 : 1;
        return acc;
    }, {});
 
    Object.keys(productIds).forEach(id => {
const product = products.find(p => p.id == id);
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
${product.name} x ${productIds[id]}</p>
            <p>$${(product.price * productIds[id]).toFixed(2)}</p>
            <button onclick="removeFromCart(${id})">Remove</button>
        `;
        cartDiv.appendChild(cartItem);
    });
 
    document.getElementById('total').innerText = `Total: $${calculateTotal().toFixed(2)}`;
}
 
// Function to remove items from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
 
// Function to calculate total price
function calculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(id => {
const product = products.find(p => p.id == id);
        total += product.price;
    });
    return total * 1.13; // Assuming 13% tax rate
}