const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: "User already exists",
                success: false
            });
        }
        // Create new user
        const newUser = new userModel({ name, email, password });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully",
            success: true
         });

    }

    catch(error){
        return res.status(500).json({ message: "Internal server error",
            success: false
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found",
                success: false
             },);
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials",
                success: false
             });
        }

        return res.status(200).json({ message: "Login successful",
            success: true
         });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error",
            success: false
        });
    }
};


module.exports= { registerUser, loginUser };

