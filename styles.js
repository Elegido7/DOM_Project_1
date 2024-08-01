//function for delaying the launch of js before HTMl is full loaded.
document.addEventListener('DOMContentLoaded', function () {
  // Function for updateing total price of the items
  function updateTotal() {
    let total = 0;
    const prices = document.querySelectorAll('.unit-price');
    const quantities = document.querySelectorAll('.quantity');

    prices.forEach((price, index) => {
      total += parseFloat(price.textContent) * parseInt(quantities[index].textContent);
    });

    document.getElementById('total').textContent = `${total} $`;
  }

  // Adding the event listeners for all plus buttons
  document.querySelectorAll('.fa-plus-circle').forEach((button) => {
    button.addEventListener('click', function () {
      const quantitySpan = this.nextElementSibling;
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  });
  // Adding the event listeners for all minus buttons
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

  // Adding event listeners for all heart buttons to add the favourite item
  document.querySelectorAll('.fa-heart').forEach((button) => {
    button.addEventListener('click', function () {
      this.classList.toggle('text-danger');
    });
  });

  // Total price update function
  updateTotal();
});
