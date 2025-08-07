// Products data
const products = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        category: "fiction",
        description: "A portrait of the Jazz Age in all of its decadence and excess, The Great Gatsby is one of the great American novels.",
        image: "images/great-gatsby.jpg"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 10.99,
        category: "fiction",
        description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
        image: "images/mockingbird.jpg"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 9.99,
        category: "fiction",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        image: "images/1984.jpg"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 8.99,
        category: "fiction",
        description: "A romantic novel that charts the emotional development of Elizabeth Bennet.",
        image: "images/pride-prejudice.jpg"
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 14.99,
        category: "fantasy",
        description: "A fantasy novel about the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
        image: "images/hobbit.jpg"
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 11.99,
        category: "fiction",
        description: "A novel about the protagonist's alienation and his search for truth in a world he finds superficial.",
        image: "images/catcher-rye.jpg"
    },
    {
        id: 7,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 24.99,
        category: "fantasy",
        description: "An epic high fantasy trilogy about the struggle to destroy the One Ring.",
        image: "images/lotr.jpg"
    },
    {
        id: 8,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        price: 15.99,
        category: "fantasy",
        description: "The first novel in the Harry Potter series about a young wizard's first year at Hogwarts.",
        image: "images/harry-potter.jpg"
    },
    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 13.99,
        category: "fiction",
        description: "A mystery thriller novel about the protagonist's involvement in a battle between the Priory of Sion and Opus Dei.",
        image: "images/da-vinci-code.jpg"
    },
    {
        id: 10,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 10.99,
        category: "fiction",
        description: "A philosophical book about a young Andalusian shepherd's journey to the pyramids of Egypt.",
        image: "images/alchemist.jpg"
    },
    {
        id: 11,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 16.99,
        category: "non-fiction",
        description: "A book exploring the history of humankind from the evolution of Homo sapiens to the present.",
        image: "images/sapiens.jpg"
    },
    {
        id: 12,
        title: "Atomic Habits",
        author: "James Clear",
        price: 14.99,
        category: "non-fiction",
        description: "A guide to building good habits and breaking bad ones with proven strategies.",
        image: "images/atomic-habits.jpg"
    },
    {
        id: 13,
        title: "Becoming",
        author: "Michelle Obama",
        price: 18.99,
        category: "biography",
        description: "A memoir by the former First Lady of the United States about her roots and journey.",
        image: "images/becoming.jpg"
    },
    {
        id: 14,
        title: "Educated",
        author: "Tara Westover",
        price: 15.99,
        category: "biography",
        description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
        image: "images/educated.jpg"
    },
    {
        id: 15,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        price: 12.99,
        category: "non-fiction",
        description: "A self-help book that advises people to accept their limitations and focus on what's truly important.",
        image: "images/subtle-art.jpg"
    },
    {
        id: 16,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: 17.99,
        category: "science",
        description: "A book about the two systems that drive the way we think and make choices.",
        image: "images/thinking-fast-slow.jpg"
    },
    {
        id: 17,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: 11.99,
        category: "non-fiction",
        description: "A guide to spiritual enlightenment that emphasizes the importance of living in the present moment.",
        image: "images/power-of-now.jpg"
    },
    {
        id: 18,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: 13.99,
        category: "non-fiction",
        description: "A self-improvement book presenting an approach to being effective in attaining goals.",
        image: "images/7-habits.jpg"
    },
    {
        id: 19,
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        price: 9.99,
        category: "non-fiction",
        description: "A self-help book offering a code of conduct based on ancient Toltec wisdom.",
        image: "images/four-agreements.jpg"
    },
    {
        id: 20,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 14.99,
        category: "fiction",
        description: "A psychological thriller about a woman who shoots her husband and then stops speaking.",
        image: "images/silent-patient.jpg"
    },
    {
        id: 21,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        price: 12.99,
        category: "fiction",
        description: "A novel about an abandoned girl who raises herself in the marshes of North Carolina.",
        image: "images/crawdads-sing.jpg"
    },
    {
        id: 22,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 13.99,
        category: "fiction",
        description: "A novel about a library between life and death where each book provides a chance to try another life.",
        image: "images/midnight-library.jpg"
    },
    {
        id: 23,
        title: "Dune",
        author: "Frank Herbert",
        price: 16.99,
        category: "science",
        description: "A science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.",
        image: "images/dune.jpg"
    },
    {
        id: 24,
        title: "The Martian",
        author: "Andy Weir",
        price: 14.99,
        category: "science",
        description: "A science fiction novel about an astronaut stranded on Mars who must find a way to survive.",
        image: "images/martian.jpg"
    },
    {
        id: 25,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: 11.99,
        category: "fiction",
        description: "A psychological thriller about a journalist and a young computer hacker who investigate a 40-year-old disappearance.",
        image: "images/dragon-tattoo.jpg"
    },
    {
        id: 26,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: 12.99,
        category: "fiction",
        description: "A psychological thriller about a woman who disappears on her fifth wedding anniversary.",
        image: "images/gone-girl.jpg"
    },
    {
        id: 27,
        title: "The Book Thief",
        author: "Markus Zusak",
        price: 10.99,
        category: "fiction",
        description: "A novel set in Nazi Germany about a girl who steals books and shares them with others.",
        image: "images/book-thief.jpg"
    },
    {
        id: 28,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        price: 11.99,
        category: "fiction",
        description: "A novel about the unlikely friendship between a wealthy boy and the son of his father's servant.",
        image: "images/kite-runner.jpg"
    },
    {
        id: 29,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        price: 9.99,
        category: "science",
        description: "A comic science fiction series about the adventures of the last surviving man after Earth is destroyed.",
        image: "images/hitchhikers-guide.jpg"
    },
    {
        id: 30,
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 10.99,
        category: "science",
        description: "A dystopian novel set in a futuristic World State where people are environmentally engineered into an intelligence-based social hierarchy.",
        image: "images/brave-new-world.jpg"
    }
];

// Function to display featured books on the homepage
function displayFeaturedBooks() {
    const featuredBooksContainer = document.getElementById('featuredBooks');
    if (!featuredBooksContainer) return;

    // Get 6 random featured books
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const featuredBooks = shuffled.slice(0, 6);

    featuredBooksContainer.innerHTML = featuredBooks.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="price">$${(typeof book.price === 'number' ? book.price.toFixed(2) : '0.00')}</p>
                <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Function to display all books on the products page
function displayAllBooks(filter = 'all', sort = 'default') {
    const allBooksContainer = document.getElementById('allBooks');
    if (!allBooksContainer) return;

    let filteredBooks = [...products];
    
    // Apply filter
    if (filter !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === filter);
    }
    
    // Apply sorting
    switch(sort) {
        case 'price-low':
            filteredBooks.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredBooks.sort((a, b) => b.price - a.price);
            break;
        case 'title-asc':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title-desc':
            filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            // Default sorting (original order)
            break;
    }

    allBooksContainer.innerHTML = filteredBooks.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="price">$${book.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Function to display product details
function displayProductDetails() {
    const productDetailContainer = document.getElementById('productDetail');
    if (!productDetailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        productDetailContainer.innerHTML = '<p>Product not found.</p>';
        return;
    }

    productDetailContainer.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h1>${product.title}</h1>
            <p class="author">by ${product.author}</p>
            <p class="price">$${(typeof product.price === 'number' ? product.price.toFixed(2) : '0.00')}</p>
            <div class="quantity-selector">
                <button class="decrease-qty">-</button>
                <input type="number" class="qty-input" value="1" min="1">
                <button class="increase-qty">+</button>
            </div>
            <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
            <div class="description">
                <h3>Description</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `;

    // Display related products (same category)
    const relatedBooksContainer = document.getElementById('relatedBooks');
    if (relatedBooksContainer) {
        const relatedBooks = products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
        
        if (relatedBooks.length > 0) {
            relatedBooksContainer.innerHTML = relatedBooks.map(book => `
                <div class="book-card" data-id="${book.id}">
                    <div class="book-image">
                        <img src="${book.image}" alt="${book.title}">
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p class="author">${book.author}</p>
                        <p class="price">$${book.price.toFixed(2)}</p>
                        <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        } else {
            relatedBooksContainer.innerHTML = '<p>No related books found.</p>';
        }
    }
}

// Initialize product-related functionality
function initProducts() {
    // Display featured books on homepage
    displayFeaturedBooks();

    // Display all books on products page
    displayAllBooks();

    // Display product details if on product detail page
    displayProductDetails();

    // Set up filter and sort event listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');

    if (categoryFilter && sortBy) {
        categoryFilter.addEventListener('change', (e) => {
            displayAllBooks(e.target.value, sortBy.value);
        });

        sortBy.addEventListener('change', (e) => {
            displayAllBooks(categoryFilter.value, e.target.value);
        });
    }

    // Set up quantity selectors on product detail page
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase-qty')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            input.value = parseInt(input.value) + 1;
        } else if (e.target.classList.contains('decrease-qty')) {
            const input = e.target.parentElement.querySelector('.qty-input');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProducts);