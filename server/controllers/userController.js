import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import UserModel from "../model/User.js";


class UserContoller{

    static userregister = async (req,res) =>{

         const {name,mobileno,password} = req.body
         
         try {
            const salt = await bcrypt.genSalt(10)
            const hasedPassword = await bcrypt.hash(password, salt) 
            const newuser = new UserModel({
                    name:name,
                    mobileno:mobileno,
                    password:hasedPassword,
                    
                 })

            const saved_user = await newuser.save()

    
           const token = await jwt.sign({userId : saved_user._id}, process.env.JWT_SECRET, {expiresIn : '5d'})

           res.status(201).send({"status" : "success", "message": "Regustration Successful..", "token" : token})
        } catch (error) {
            console.log(error)        
         }
         
    }


    static userlogin = async (req,res) =>{
          
        try {

            const {mobileno, password} = req.body
            if(mobileno && password){

                const user = await UserModel.findOne({mobileno : mobileno})
                if(user !=null){
                  
                    const isMatch = await bcrypt.compare(password, user.password)
                    if(isMatch && (user.mobileno === mobileno)){
                        //GENERATE JWT TOKEN
                       const token = await jwt.sign({userId : user._id}, process.env.JWT_SECRET, {expiresIn : '5d'})
                        res.status(200).send({"status":"success", "message":"Login Sucessfully", "token": token})
                        
                    }else{
                        res.status(400).send({"status":"failed", "message":"Invalid credentials.."})                       
                    }
                    
                }else{
                    res.status(400).send({"status":"failed", "message":"You are not registered yet.."})
                }

            }else{
                res.status(400).send({"status":"failed", "message":"All fields are required.."})
            }
            
        } catch (error) {
            res.status(400).send({"status":"failed", "message":"Unable to login"})   
        }

    }


  

}



export default UserContoller