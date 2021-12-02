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
  const table = document.querySelector('tbody')
  const productInput = document.querySelector('.create-product .productName')
  const priceInput = document.querySelector('.create-product .productPrice')
  const newRow = document.createElement('tr')
  table.appendChild(newRow)
  newRow.className = 'product'

  const newName = document.createElement('td')
  newName.className = 'name'
  newRow.appendChild(newName)

  const newSpan = document.createElement('span')
  if (productInput.value === '') return
  newSpan.value = productInput.value
  newName.appendChild(newSpan)


  const newPrice = document.createElement('td')
  newPrice.className = 'price'
  newRow.appendChild(newPrice)

  const newQuantity = document.createElement('td')
  newQuantity.className = 'quantity'
  newRow.appendChild(newQuantity)

  const newSubtotal = document.createElement('td')
  newSubtotal.className = 'subtotal'
  newRow.appendChild(newSubtotal)

  const newAction = document.createElement('td')
  newAction.className = 'action'
  newRow.appendChild(newAction)



  // if (productInput.value === '') return
  // if (priceInput.value === '') return
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.action .btn-remove')
  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct);

});
