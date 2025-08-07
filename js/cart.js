// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count in header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Function to add item to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            author: product.author,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    showAddedToCartMessage(product.title);
}

// Function to show "added to cart" message
function showAddedToCartMessage(title) {
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.innerHTML = `
        <p>${title} has been added to your cart!</p>
        <a href="cart.html">View Cart</a>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);

    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCartItems();
}

// Function to update item quantity in cart
function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        saveCart();
        displayCartItems();
    }
}

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const orderItemsContainer = document.getElementById('orderItems');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    
    if (cartItemsContainer) {
        if (cart.length === 0) {
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
        } else {
            if (emptyCartMessage) emptyCartMessage.style.display = 'none';
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-title">${item.title}</h3>
                        <p class="cart-item-author">${item.author}</p>
                        <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                        <div class="cart-item-quantity">
                            <button class="decrease-qty" data-id="${item.id}">-</button>
                            <input type="number" class="qty-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="increase-qty" data-id="${item.id}">+</button>
                        </div>
                        <p class="cart-item-remove" data-id="${item.id}">Remove</p>
                    </div>
                </div>
            `).join('');
        }
    }

    if (orderItemsContainer) {
        orderItemsContainer.innerHTML = cart.map(item => `
            <div class="order-item">
                <div class="order-item-name">${item.title}</div>
                <div class="order-item-quantity">${item.quantity}</div>
                <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        `).join('');
    }

    updateOrderSummary();
}

// Function to update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.00; // Flat rate shipping
    const total = subtotal + shipping;

    // Update cart summary
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = `$${shipping.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;

    // Update checkout summary
    const orderSubtotal = document.getElementById('orderSubtotal');
    const orderShipping = document.getElementById('orderShipping');
    const orderTotal = document.getElementById('orderTotal');
    
    if (orderSubtotal) orderSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (orderShipping) orderShipping.textContent = `$${shipping.toFixed(2)}`;
    if (orderTotal) orderTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to handle cart interactions
function handleCartInteractions() {
    document.addEventListener('click', (e) => {
        // Add to cart buttons
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            let quantity = 1;
            
            // Check if on product detail page and get quantity
            const qtyInput = document.querySelector('.product-info .qty-input');
            if (qtyInput) {
                quantity = parseInt(qtyInput.value);
            }
            
            addToCart(productId, quantity);
        }
        
        // Remove item from cart
        if (e.target.classList.contains('cart-item-remove')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        // Increase quantity in cart
        if (e.target.classList.contains('increase-qty') && e.target.closest('.cart-item-quantity')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const input = e.target.parentElement.querySelector('.qty-input');
            input.value = parseInt(input.value) + 1;
            updateCartItemQuantity(productId, parseInt(input.value));
        }
        
        // Decrease quantity in cart
        if (e.target.classList.contains('decrease-qty') && e.target.closest('.cart-item-quantity')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const input = e.target.parentElement.querySelector('.qty-input');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateCartItemQuantity(productId, parseInt(input.value));
            }
        }
    });
    
    // Handle direct input of quantity in cart
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('qty-input') && e.target.closest('.cart-item-quantity')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const quantity = parseInt(e.target.value);
            
            if (quantity >= 1) {
                updateCartItemQuantity(productId, quantity);
            } else {
                e.target.value = 1;
                updateCartItemQuantity(productId, 1);
            }
        }
    });
    
    // Handle place order button
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            // In a real application, you would process the payment here
            alert('Thank you for your order! Your books will be shipped soon.');
            cart = [];
            saveCart();
            window.location.href = 'index.html';
        });
    }
}

// Initialize cart functionality
function initCart() {
    updateCartCount();
    displayCartItems();
    handleCartInteractions();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCart);