// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // js/index.js
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotalValue = parseInt(price.innerHTML) * parseInt(quantity.value)
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue
  console.log(quantity)




  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.querySelectorAll('.product');
  console.log(multipleProducts)

  multipleProducts.forEach((singleProduct) => {
    updateSubtotal(singleProduct)
  })
  // ITERATION 3

  const subtotals = document.querySelectorAll('.subtotal span')
  const subtotalValues = Array.from(subtotals).map(subtotal => {
    return parseInt(subtotal.innerHTML)
  })
  const totalValue = subtotalValues.reduce((acc, curr) => {
    return acc + curr
  })
  console.log(totalValue)
  const finalTotal = document.querySelector('#total-value span')
  finalTotal.innerHTML = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  // target event is the Remove button, its parent is '.action' but since I need to remove the entire row, 
  // instead of removing the child I'm just removing the '.product' class
  const parentOfAction = target.parentNode.parentNode
  parentOfAction.remove()
  parentOfAction.onclick = () => {
    calculateAll()
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.action .btn-remove')
  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

});
