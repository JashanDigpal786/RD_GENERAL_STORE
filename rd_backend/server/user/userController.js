const bcrypt = require("bcrypt")
const User = require("../user/userModel")

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ success: false, message: "Invalid password" });
  }

  const token = "dummy-token"; // or JWT token if you’re using JWT

  return res.json({
    success: true,
    message: "Login successful",
    data: user,
    token: token,
  });
};
