
import Address from "../modals/address.modal.js";
import cartService from "./cart.service.js";
import Order from "../modals/order.modal.js";
import OrderItems from "../modals/orderitems.modal.js";
// import { populate } from "dotenv";

const createOrder = async (user, shippingAddress) => {
  
  
  let address;
  try {
    if (shippingAddress._id) {
      let addressExist = await Address.findById(shippingAddress._id);
      address = addressExist;
    } else {
      address = new Address(shippingAddress);
      
      address.user = user;
      await address.save();
      
      await user.address.push(address);
      // console.log(user.address);
      
      await user.save();
      
    }
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
      const orderItem = new OrderItems({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice,
      });

      const createdOrderItem = await orderItem.save();
      orderItems.push(createdOrderItem);

      const createOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        discount: cart.discounts,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        totalItems: cart.totalItems,
        shippingAddress: address,

      });
      const saveOrder = await createOrder.save();
      
      
      return saveOrder;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const placeOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED";
    order.paymentDetails.paymentStatus = "COMPLETED";
    return await order.save();
  } catch (error) {
    throw new Error("order not placed");
  }
};
const cancelOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";

    return await order.save();
  } catch (error) {
    throw new Error("order not cancelled");
  }
};
const shippedOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";

    return await order.save();
  } catch (error) {
    throw new Error("order not shipped");
  }
};
const deliverOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";

    return await order.save();
  } catch (error) {
    throw new Error("order not delivered");
  }
};
const confirmOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";

    return await order.save();
  } catch (error) {
    throw new Error("order not confirmed");
  }
};

const findOrderById = async (orderId) => {
  try {
    const order = await Order.findById(orderId)
      .populate("User_ecommerce")
      .populate({
        path: "OrderItems_ecommerce",
        populate: { path: "Product_ecommerce" },
      })
      .populate("Address_ecommerce");
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const orderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })

      .populate({
        path: "orderItems",
        populate: { path: "product" },
      })
      .lean();
    if (!orders) {
      throw new Error("No orders found for this user");
    }
    return orders;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getAllOrders = async () => {
  try {
    const orders = await Order.find()

      .populate({
        path: "orderItems",
        populate: { path: "product" },
      })
      .lean();
    if (!orders) {
      throw new Error("No orders found for this user");
    }
    return orders;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  try {
    const order = await Order.findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error("order not deleted");
  }
};
export default {
  cancelOrder,
  createOrder,
  deleteOrder,
  shippedOrder,
  deliverOrder,
  findOrderById,
  orderHistory,
  confirmOrder,
  getAllOrders,
  placeOrder,
};
