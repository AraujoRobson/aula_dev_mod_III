const { PrismaClient } = require('@prisma/client')
const { User } = new PrismaClient()
const fs = require('fs')

module.exports = {
  async list(req, res){
    try {
      const users = await Users.findMany({})

      if(users.length === 0){
        return res.status(200).json({message: 'There are no registered users!'})
      }
      res.status(200).json({users})
    } catch(error){
      res.json(error)
    }
  },

  async add(req, res){
    const {nName: name, nEmail: email} = req.body
    const photo = req.file? fs.readFileSync(req.file.path) : new Buffer.from('', 'base64')

    try{
      let user = await User.findUnique({ where: { email } })
      if(user){
        return res.status(401).json({ error: 'E-mail already registered!'})
      }

      user = await User.create({
        data: { name, email, photo}
      })
      res.status(200).json({ message: "User successfully added!", user })
    }catch(error){
      res.json(error)
    } finally {
      fs.unlinkSync('uploads/img.png')
    }
  },

  async searchById(req, res){
    try{
      const { id } = req.params
      const user = await User.findUnique({ where: { id: Number(id) } })
      if(!user){
        return res.status(200).json({ message: 'User not found!' })
      }

      res.status(200).json(user)
    } catch(error){
      res.json(error)
    }
  },

  async edit(req, res){
    try{
      const { id } = req.params
      const { nName: name, nEmail: email } = req.body
      const photo = req.file? fs.readFileSync(req.file.path) : new Buffer.from('', 'base64')

      let user = await User.findUnique({ where: { id: Number(id) } })
      if(!user){
        return res.status(200).json({ message: 'User not found!'})
      }

      user = await User.update({
        where: { id : Number(id) },
        data: { name, email, photo}
      })

      return res.status(200).json({ message: 'User updated successfully', user})
    } catch(error){
      res.json(error)
    } finally {
      fs.unlinkSync('uploads/img.png')
    }
  },

  async delete(req, res){
    try{
      const { id } = req.params

      const user = await User.findUnique({ where: { id: Number(id) } })
      if(!user){
        return res.status(200).json({ message: 'User not found!' })
      }
      await User.delete({ where: { id: Number(id) } })
      res.status(200).json({ message: 'Deleted user!' })
    } catch (error){
      res.json(error)
    }
  }
}
