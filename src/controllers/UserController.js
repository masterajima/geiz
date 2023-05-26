const { User } = require("../model/User");
class UserController {
  async register(req, res) {
    try {
      const { email, password } = req.body;

      //check if user already exist
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "user already exist" });
      }
      //hash password
      const hashPass = await bcrypt.hash(password, 10);
      //create new user
      const newUser = new User({
        email,
        password: hashPass,
      });
      //save user to database
      await newUser.save();
      return res.status(201).json({ message: "user register sucssfully" });
    } catch (e) {
      console.error("error registering user");
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.export = UserController;
