const User = require('../models/User');

const bcrypt = require('bcrypt')

const createUserToken = require('../helpers/create-user-token')

module.exports = class UserController {
    static async register(req ,res){
        
        const {name, email, phone, password, confirmpassword} = req.body;

        //Validation
            if (!name) {
            res.status(422).json({ message: 'O nome é obrigatório!' })
            return
          }
      
          if (!email) {
            res.status(422).json({ message: 'O e-mail é obrigatório!' })
            return
          }
      
          if (!phone) {
            res.status(422).json({ message: 'O telefone é obrigatório!' })
            return
          }
      
          if (!password) {
            res.status(422).json({ message: 'A senha é obrigatória!' })
            return
          }
      
          if (!confirmpassword) {
            res.status(422).json({ message: 'A confirmação de senha é obrigatória!' })
            return
          }
      
          if (password != confirmpassword) {
            res
              .status(422)
              .json({ message: 'A senha e a confirmação precisam ser iguais!' })
            return
          }
      
          // check if user exists
          const userExists =  User.findOne({ email: email })
      
          if (userExists) {
            res.status(422).json({ message: 'Por favor, utilize outro e-mail!' })
            return
          }
      
          // create password
          const salt = await bcrypt.genSalt(12)
          const passwordHash = await bcrypt.hash(password, salt)


          //create User
          const user = new User({
            name,
            email,
            phone,
            password: passwordHash,

          })

          try{

            const newUser = await user.save();
            
            await createUserToken(newUser , req , res)

          }catch(error){
            console.log(error)
          }







    }
}