const lord_rings = {
  name: 'Lord Of The Rings',
  writer: 'J. R. R. Tolkien',
  director: 'Peter Jackson',
  hobbits: ['Merry', 'Pippin', 'Frodo', 'Sam', 'Bilbo'],
  wizards: ['Gandalf', 'Radagast', 'Saruman'],

  listHobbits() {
    this.hobbits.forEach(hobbits => {
        console.log(`O Filme ${this.name} tem um Hobbit chamado ${hobbits}.`)
    })
  },

  listWizards(){
    for(var i of this.wizards){
      console.log(`O filme ${this.name} tem um mago chamado ${i}.`)
    }
  },

  createSummary: function(){
    return `Filme: ${this.name}
              <br>Escritor: ${this.writer}.
              <br>Diretor: ${this.director}.
              <br>Hobbits: ${this.hobbits.join(', ')}.
              <br>Magos: ${this.wizards.join(', ')}.`
  }
}

function show_summary(){
  document.getElementById('iSummary').innerHTML = lord_rings.createSummary();
}

console.log('-=-=-=-=-=-')
lord_rings.listHobbits()
console.log('-=-=-=-=-=-')
lord_rings.listWizards()
console.log('-=-=-=-=-=-')
