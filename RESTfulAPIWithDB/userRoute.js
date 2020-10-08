const express = require("express");
const router = express.Router();
const User = require("./UserModel");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      { $set: { email: req.body.email } }
    );
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res.json(deleteUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
