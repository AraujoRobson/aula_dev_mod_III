const shopping_cart = [
  '{ "name": "Borracha", "price": 3.45 }',
  '{ "name": "Caderno",  "price": 13.90 }',
  '{ "name": "Lápis",    "price": 2.5 }',
  '{ "name": "Caneta",   "price": 7.5 }',
];


console.table(shopping_cart)

function mapToJson(shopping_cart) {
  return JSON.stringify([...shopping_cart]);
}

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

console.table(mapToJson(shopping_cart))
console.table(jsonToMap(shopping_cart))
