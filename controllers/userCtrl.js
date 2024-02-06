
const userModel = require("../model/userModel.js");

const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      if (exisitingUser) {
        return res
          .status(200)
          .send({ message: "User Already Exist", success: false });
      }
      
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new userModel(req.body);
      await newUser.save();
      return res.status(200).json({ message: "Mail Sent Successfully", success: true });
    
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };
  
  // login callback
  const loginController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid EMail or Password", success: false });
      }
     
      
      return res.status(200).json({ message: "Login Success", success: true,user });
      
      
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };


  

  module.exports={loginController,registerController}