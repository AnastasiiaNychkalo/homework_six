const colors = document.querySelectorAll('.color');

const priceDisplay = document.getElementById('outprice');

colors.forEach(color => {
  color.addEventListener('click', () => {

    const price = parseFloat(color.getAttribute('data-price'));
    
    priceDisplay.textContent = price.toFixed(2); 
  });
});