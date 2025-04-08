import orderService from "../services/order.service.js";


const getAllOrders = async (req, res) => {  
   try {
    const orders = await orderService.getAllOrders();
    return res.status(200).json(orders);}
    catch (error) {
      return res.status(500).json({ message: error.message });
    }
    
}
const confirmOrder = async (req, res) => {     
    try {
        const orderId = req.params.orderId;
        const order = await orderService.confirmOrder(orderId);
        return res.status(200).json(order);}
        catch (error) {
        return res.status(500).json({ message: error.message });
        }
 }

  const deleteOrder = async (req, res) => { 
      try {
        const orderId=req.params.orderId;
        const order = await orderService.deleteOrder(orderId);
        return res.status(200).json(order);}
        catch (error) {
        return res.status(500).json({ message: error.message });
        }
  }

  const shippedOrder = async (req, res) => { 
      try {
        const orderId=req.params.orderId;
        const order = await orderService.shippedOrder(orderId);
        return res.status(200).json(order);}
        catch (error) {
        return res.status(500).json({ message: error.message });
        }
  } 

 const cancelOrder = async (req, res) => {  
    try {
        const orderId = req.params.orderId;
        const order = await orderService.cancelOrder(orderId);
        return res.status(200).json(order);}
        catch (error) {
        return res.status(500).json({ message: error.message });
        }
  }
 const deliverOrder = async (req, res) => { 
    try {
        const orderId = req.params.orderId;
        const order = await orderService.deliverOrder(orderId);
        return res.status(200).json(order);}
        catch (error) {
        return res.status(500).json({ message: error.message });
        }
  
 }
 export default { getAllOrders, confirmOrder, deleteOrder, shippedOrder, cancelOrder, deliverOrder };