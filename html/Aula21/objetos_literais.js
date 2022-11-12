const name = 'Fulano'
const last_name = 'da Silva'
const age = 27
const hobbies = ['cantar', 'dançar', 'ouvir musica']

const fulano = {
  name: name,
  last_name: last_name,
  age: age,
  hobbies: hobbies,
  full_name: function(){
    return this.name + ' ' + this.last_name
  }
}

console.log(fulano);
console.log(fulano.full_name());
