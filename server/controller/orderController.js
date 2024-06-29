import Order from "../model/Order.js";

export const storeOrder = async (req, res) => {
    const { products, userId } = req.body;
    console.log('Products:', products);
    console.log('User ID:', userId);
    try {
      const order = new Order({
        userId,
        products,
      });
      await order.save();
  
      res.status(201).json({ message: 'Order stored successfully' });
  
    } catch (error) {
      console.error('Error storing order:', error);
      res.status(500).json({ error: 'Failed to store order' });
    }
  };

  export const getOrder = async(req,res)=>{
    const userId =req.params.id;
    console.log(userId)
    console.log('User ID:', userId);
    try {
      const order = await Order.find({userId});
      res.status(200).json({data:order});
    } catch (error) {
      console.error('Error getting order:', error);
      res.status(500).json({ error: 'Failed to get order' });
    }
  }