const { PrismaClient } = require("@prisma/client")
const { User } = new PrismaClient()

module.exports = {
  async listUsers(req, res){
    try {
      const users = await User.findMany({
        select: {
          id: true,
          name: true,
          email: true
        }
      })
      if(users.length === 0){
        return res.status(200).json({ mensage: "There are no registered users" })
      }

      res.status(200).json({users})
    } catch(error){
      res.json(error)
    }
  },

  async createUser(req, res){
    const { name, email } = req.body

    try {
      let user = await User.create({
        data: {
          name,
          email
        }
      })
      res.status(200).json({ mensage: "User successfully added", user })
    } catch (error) {
      res.json(error)
    }
  },

  async searchUserById(req, res){
    try{
      const { id } = req.params

      const user = await User.findUnique({ where: { id: Number(id) } })
      if(!user){
        return res.status(200).json({ mensage: "User not found!" })
      }

      res.status(200).json(user)
    }catch(error){
      res.json(error)
    }
  }
}