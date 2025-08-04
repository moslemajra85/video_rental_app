const express = require("express");
const {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} =  require("../controllers/customersController");


const Router = express.Router();

Router.get("/", getCustomers);
Router.get("/:id", getCustomer);
Router.post("/", createCustomer);
Router.put("/:id", updateCustomer);
Router.delete("/:id", deleteCustomer);

module.exports = Router;
