import orderService from "../services/order.service.js";

const createOrder = async (req, res) => {
  try {
    const user=await req.user;
    
    const orderData = req.body;
    const createdOrder = await orderService.createOrder(user,orderData);
    return res.status(201).json({message:"order created successfully",createdOrder});
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const findOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.findOrderById(orderId);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
const orderHistory=async(req,res)=>{
  try{
    const user=await req.user;
    const userId=user._id;
    const orders=await orderService.orderHistory(userId);
    return res.status(200).json(orders);
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export default { createOrder, findOrderById, orderHistory };