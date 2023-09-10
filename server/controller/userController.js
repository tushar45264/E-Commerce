import User from "../model/userSchema.js"

export const UserSignup = async (request,response)=> {
    try {
        const exit = await User.findOne({username: request.body.username});
        if(exit){
            return response.status(401).json({message: "Username already exists"});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({message: user});
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

export const UserLogin = async (request,response)=> {
    try {
        const username = request.body.username;
        const password = request.body.password;

        let us= await User.findOne({username: username, password: password});
        if(us){
            response.status(200).json({data:us}); 
        } else {
            response.status(401).json('Invalid Login'); 
        }
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}