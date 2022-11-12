const name = 'Fulano'
const last_name = 'da Silva'
const age = 27
const hobbies = ['cantar', 'dançar', 'ouvir musica']

const fulano = {
  name,
  last_name,
  age,
  hobbies,
  full_name(){
    return this.name + ' ' + this.last_name
  }
}

console.log(fulano);
console.log(fulano.full_name());
