const random = () => {
return Promise.resolve(Math.trunc(Math.random() * 10))
}

const random_sum = () => {
  let first, second, third

  return random()
    .then(v => {
      first = v
      return random()
    })
    .then(v => {
      second = v
      return random()
    })
    .then(v => {
      third = v
      return first + second + third
    })
    .then(v => {
      console.log(`${first} + ${second} + ${third} = ${v}`)
    })
}

random_sum()
