const fs = require('fs')

const read_file = file => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if(err){
      reject('err!')
    } else {
      resolve(data)
    }
  })
})

read = async () => {
  try{
    let file1 = await read_file('./in1.txt')
    let file2 = await read_file('./in2.txt')
    return file1 + file2
  } catch(err){
    console.log('an error has occurred')
    return 'an error has occurred'
  }
}

read()
  .then(result => console.log(result))
