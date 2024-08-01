document.addEventListener('DOMContentLoaded', function () {
  // Function to update total price
  function updateTotal() {
    let total = 0;
    const prices = document.querySelectorAll('.unit-price');
    const quantities = document.querySelectorAll('.quantity');

    prices.forEach((price, index) => {
      total += parseFloat(price.textContent) * parseInt(quantities[index].textContent);
    });

    document.getElementById('total').textContent = `${total} $`;
  }

  // Adding event listeners for all plus and minus buttons
  document.querySelectorAll('.fa-plus-circle').forEach((button) => {
    button.addEventListener('click', function () {
      const quantitySpan = this.nextElementSibling;
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });

  document.querySelectorAll('.fa-minus-circle').forEach((button) => {
    button.addEventListener('click', function () {
      const quantitySpan = this.previousElementSibling;
      if (parseInt(quantitySpan.textContent) > 0) {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
      }
      updateTotal();
    });
  });

  // Adding event listeners for all delete buttons
  document.querySelectorAll('.fa-trash-alt').forEach((button) => {
    button.addEventListener('click', function () {
      const productCard = this.closest('.card-body');
      productCard.remove();
      updateTotal();
    });
  });

  // Add event listeners for all heart buttons (for adding to favorites, functionality to be implemented)
  document.querySelectorAll('.fa-heart').forEach((button) => {
    button.addEventListener('click', function () {
      this.classList.toggle('text-danger');
    //   // Implement your favorite functionality here
    //   alert('Added to favorites!');
    });
  });

  // Initial total price update
  updateTotal();
});
