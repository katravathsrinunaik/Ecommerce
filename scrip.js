window.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsCount = document.querySelector('.cart span');
  const contactForm = document.querySelector('#contact form');

  let cartCount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      cartCount++;
      cartItemsCount.textContent = cartCount;
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
  });
});
