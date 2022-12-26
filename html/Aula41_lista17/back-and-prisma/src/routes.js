const router = require('express').Router()
const { PrismaClient } = require("@prisma/client")

const { User } = new PrismaClient()

router.get('/', async (req, res) => {
  try {
    const users = await User.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
  })

  if(users.length === 0){
    return res.status(200).json({ msg: 'There are no registered users!' })
  }
  res.status(200).json({ users })
  } catch (error){
    res.json(error)
  }
})

router.post('/', async (req, res) => {
  const { name, email } = req.body

  try{
    let user = await User.findUnique({ where: { email }})
    if(user){
      return res.status(401).json({ error: 'E-mail already registered!'})
    }

    user = await User.create({
      data: {
        name,
        email
      }
    })

    res.status(200).json({ msg: 'User added successfully!'})
  } catch (error){
    res.json(error)
  }
})

module.exports = router;
