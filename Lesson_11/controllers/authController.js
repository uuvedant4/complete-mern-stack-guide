const bcrypt = require("bcrypt");

const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    res.status(400).json({ message: "Username and password are required." });
  }
  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) {
    return res.sendStatus(401);
  }
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // 04:09:00
    res.json({ success: `User ${user} is logged in!` });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
