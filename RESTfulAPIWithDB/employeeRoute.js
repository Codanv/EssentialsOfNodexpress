const express = require("express");
const router = express.Router();
const Employee = require("./EmployeeModel");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // const employee = await Employee.find({_id: req.params.id})
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      designation: req.body.designation,
    });
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Employee.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name}},
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Employee.deleteOne({_id: req.params.id});
    res.send(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
