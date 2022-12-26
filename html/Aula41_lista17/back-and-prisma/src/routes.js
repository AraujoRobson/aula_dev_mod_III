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

module.exports = router;
