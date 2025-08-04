const Customer = require("../models/customer");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCustomer = async (req, res) => {};

const createCustomer = async (req, res) => {
  try {
    const c = new Customer({
      ...req.body,
    });

    const result = await c.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCustomer = async (req, res) => {};

const deleteCustomer = async (req, res) => {};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
