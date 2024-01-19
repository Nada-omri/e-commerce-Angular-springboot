const User = require ('../models/user')


/*const ValidateUser = require("../validation/userValidation");
const registerUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await User.findOne({ email: req.body.email }).then(async (exist) => {
        if (exist) {
          errors.email = "User Exist";
          res.status(404).json(errors);
        } else {
          await User.create(req.body);
          res.status(201).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};*/


const test=(req,res)=>{
    res.json('test is working')
}
const registerUser =async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        if(!password || password.length<3){
            res.json({
                error:'try again'
            })
        }
        const exist = await User.findOne({email})
        if (exist){
            return res.json({
                error:"email already used"
            })
        }
        
        const user = await User.create({
            name, email, password
        })
        return res.json(user)
    }catch(error){
        console.log(er)
    }
};
 const findAllUsers= async( req,res) =>{
   try{
    const bd = await User.find()
    res.status(201).json(bd)
   } catch(error){
    console.log("erreue")
   }
 };
 const findsingleUser= async(req,res) =>{
    try{
        const bd = await User.findOne({_id:req.params.id})
        res.status(201).json(bd)
       } catch(error){
        console.log("erreue")
       }
     };
 
 const updateUser= async(req,res) =>{
    try{
        const bd = await User.findOneAndUpdate({_id:req.params.id},
            req.body,
            {new:true})
        res.status(201).json(bd)
       } catch(error){
        console.log("erreue")
       }
     };
 
 const deleteUser= async(req,res) =>{
    try{
        const bd = await User.deleteOne({_id:req.params.id})
        res.status(201).json({message :"user deleted successfully"})
       } catch(error){
        console.log("erreue")
       }
     };
 



module.exports ={
    test, registerUser,findAllUsers,findsingleUser,updateUser,deleteUser
}
