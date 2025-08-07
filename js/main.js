// Main functionality
function initMain() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
    
    // Make book cards clickable to go to product detail page
    document.addEventListener('click', (e) => {
        const bookCard = e.target.closest('.book-card');
        if (bookCard && !e.target.classList.contains('add-to-cart')) {
            const productId = bookCard.getAttribute('data-id');
            window.location.href = `product-detail.html?id=${productId}`;
        }
    });
    
    // Add styles for cart message
    const style = document.createElement('style');
    style.textContent = `
        .cart-message {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #4a6fa5;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .cart-message.show {
            transform: translateY(0);
            opacity: 1;
        }
        .cart-message a {
            color: white;
            text-decoration: underline;
            margin-left: 10px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initMain);