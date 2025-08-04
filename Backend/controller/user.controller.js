import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup=async (req,res)=>{
    try {
        const {fullname, email, password} = req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashpassword=await bcryptjs.hash(password, 10);
        // Hash the password before saving it to the database
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password: hashpassword, // Use the hashed password
        })
        await createdUser.save();
        res.status(201).json({message: "User created successfully",user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        }});
    } catch (error) {
        console.log("Error creating user:"+error.message);
         // Return a 500 status code with an error message
         // This is important for the client to know that something went wrong
         // and to handle it appropriately.
        
        res.status(500).json({message: "Error creating user", error});
    }
}

export const login=async (req,res)=>{
    try {
        const { email, password} = req.body;
        const user=await User.findOne({email})
        // checking if the password given by the user matches the hashed password in the database
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        else{
            res.status(200).json({message: "Login successful", user:{
                _id: user._id,
                fullname: user.fullname, 
                email: user.email
            }});
        }
    } catch (error) {
        console.error("Error logging in user:", error.message);
        res.status(500).json({message: "Error logging in user", error});
        // Log the error message for debugging purposes
        // Return a 500 status code with an error message
    }
}