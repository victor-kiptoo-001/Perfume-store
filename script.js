// Cart Functionality
const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartDisplay = document.getElementById('cart');

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
        const id = button.getAttribute('data-id');
        cart.push(products[id]);
        updateCart();
        cartDisplay.style.display = 'block';
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - KES ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}

// Fragrance Finder
document.getElementById('finder-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const preference = document.getElementById('preference').value;
    const occasion = document.getElementById('occasion').value;
    let result = 'Try ';
    if (preference === 'floral') result += 'Floral Whisper';
    else if (preference === 'woody') result += 'Woody Embrace';
    else result += 'Sunlit Citrus';
    result += ` for ${occasion === 'daily' ? 'daily wear' : 'special events'}.`;
    document.getElementById('finder-result').textContent = result;
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Form Submissions (Placeholder)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We’ll get back to you soon.');
});
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Subscribed! Welcome to the VICKYBLINDER family.');
});