// Cart Functionality
const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartDisplay = document.getElementById('cart');
const cartClose = document.querySelector('.cart-close');
let isLoggedIn = false; // Simulate login state

const products = {
    1: { name: 'Summer Breeze', price: 2400 },
    2: { name: 'Golden Aura', price: 2450 },
    3: { name: 'Midnight Veil', price: 2250 },
    4: { name: 'Sunlit Citrus', price: 2000 },
    5: { name: 'Floral Whisper', price: 2200 },
    6: { name: 'Woody Embrace', price: 2300 }
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        if (!isLoggedIn) {
            showLoginModal();
        } else {
            const id = button.getAttribute('data-id');
            cart.push(products[id]);
            updateCart();
            cartDisplay.classList.add('visible');
        }
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - KES ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}

cartClose.addEventListener('click', () => {
    cartDisplay.classList.remove('visible');
});

// Updated Fragrance Finder
const recommendations = {
    masculine: ['Midnight Veil', 'Woody Embrace'],
    feminine: ['Golden Aura', 'Floral Whisper'],
    neutral: ['Summer Breeze', 'Sunlit Citrus']
};

document.getElementById('finder-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const options = recommendations[category];
    const randomPick = options[Math.floor(Math.random() * options.length)];
    document.getElementById('finder-result').textContent = `We recommend ${randomPick} for a ${category} scent experience.`;
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Form Submissions
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We’ll get back to you soon.');
});
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscribed! Welcome to the Celeste Scents family.');
});

// Login Modal
const loginModal = document.getElementById('login-modal');
const loginClose = document.querySelector('.login-close');
const loginForm = document.getElementById('login-form');

function showLoginModal() {
    loginModal.style.display = 'flex';
}

loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) { // Simple validation
        isLoggedIn = true;
        loginModal.style.display = 'none';
        alert('Logged in successfully! You can now add items to your cart.');
    }
});