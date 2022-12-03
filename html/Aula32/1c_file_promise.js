const fs = require('fs')

const read_file = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, data) => {
    if(err){
      reject(err)
    } else {
      resolve(data)
    }
  })
})

read_file('./in1.txt')
  .then(data => {
    console.log(String(data))
    return read_file('./in2.txt')
  }).then(data => {
    console.log(String(data))
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log('finished reading the files')
  })
