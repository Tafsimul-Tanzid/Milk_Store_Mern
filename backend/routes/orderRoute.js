import express from "express";
import {
    Order
} from "../models/milkModel.js";

const router = express.Router();

//Route for save data
router.post("/", async (req, res) => {
    try {
        if (!req.body.name || !req.body.orderDate || !req.body.amount) {
            return res.status(400).send({
                message: "Fill out All required fields: name,amount,orderDate",
            });
        }
        const newOrder = {
            name: req.body.name,
            amount: req.body.amount,
            orderDate: req.body.orderDate,
        };
        const Orders = await Order.create(newOrder);
        return res.status(201).send(Orders);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});

//Route for Get all order from Database
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find({});
        return res.status(200).json({
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});

//Route for Get all order from Database by Id
router.get("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const order = await Order.findById(id);
        return res.status(200).json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});
//Route for update a order
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.name || !req.body.orderDate || !req.body.amount) {
            return res.status(400).send({
                message: "Send All required fields: name, amount, orderDate",
            });
        }
        const {
            id
        } = req.params;
        const result = await Order.findByIdAndUpdate(id, req.body);
        // console.log(result,'fsfef');
        if (!result) {
            return res.status(404).send({
                message: "Order Not Found"
            });
        }
        return res.status(200).send({
            message: "Order Updated Successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});

//Route For Delete Order
router.delete("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const result = await Order.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({
                message: "Order Not Found"
            });
        }
        return res.status(200).send({
            message: "Order Deleted Successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: error.message
        });
    }
});

export default router;