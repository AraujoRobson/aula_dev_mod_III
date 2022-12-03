const random = () => {
  return Promise.resolve(Math.trunc(Math.random() * 10))
  }

  const random_sum = async () => {
    const first = await random()
    const second = await random()
    const third = await random()

    const sum = first + second + third
    console.log(`${first} + ${second} + ${third} = ${sum}`)
  }

  random_sum()
