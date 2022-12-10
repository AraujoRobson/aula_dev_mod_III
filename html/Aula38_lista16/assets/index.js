const products = [
  {name: 'Notebook Samsumg', price: 4999.99, sold: true,  type: 'notebook'},
  {name: 'Notebook Sony',    price: 5999.99, sold: false, type: 'notebook'},
  {name: 'iPad',             price: 6999.99, sold: false, type: 'tablet'},
  {name: 'iPhone',           price: 7999.99, sold: true,  type: 'smartphone'},
  {name: 'Copo de plástico', price:    1.99, sold: false, type: 'copo'},
  {name: 'Copo de vidro',    price:   10.99, sold: true,  type: 'copo'},
]
console.log('Full table');
console.table(products)

let invalidEntries = 0

function filterByID(obj) {
  if ('price' in obj && typeof(obj.price) === 'number' && !isNaN(obj.price) && obj.price > 5000) {
    return true
  } else {
    invalidEntries++
    return false
  }
}

let map = products.filter(filterByID).map(function(item) {
  return item.name
})

console.log('');
console.log('filter by price: 5000');
console.table(products.filter(filterByID))

console.log('');
console.log('filtered price 5000 and map by name');
console.table(map);

console.log('teste');
