const shopping_cart = [
  '{"name": "Borracha", "price":  3.45 }',
  '{"name": "Caderno",  "price": 13.90 }',
  '{"name": "Lápis",    "price":  2.5  }',
  '{"name": "Caneta",   "price":  7.5  }',
]

console.table(shopping_cart)

// const map = new Map(Object.entries(JSON.parse(shopping_cart)));

let jsonMap = JSON.stringify([...map.entries()])
let myMap = new Map(JSON.parse(shopping_cart));
