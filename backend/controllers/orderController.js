import asyncHandler from "express-async-handler";
import Order from '../models/orderModel.js';
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });
    const createdOrder = await order.save()
    res.status(201).json(createdOrder);
  }
});


// Legacy Code 
// const getOrderItems  =  asyncHandler(async(req,res) => {
//   const orders = await Order.find({});
//   if(orders) {
//     res.json(order)
//   }
// })

const updateOrderToPaid = asyncHandler(async(req,res) => {
  const order = await Order.findById(req.params.id);
  if(order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult =  {
      id:req.body.id,
      status:req.body.status,
      update_time:req.body.update_time,
      email__address:req.body.payer.email_address
    }
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  }

  else {
    res.status(404)
    throw new Error('Order not found');
  }
})

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})


const getMyOrders = asyncHandler(async (req,res) => {
  const orders = await Order.find({user:req.user._id});
  if(orders) {
    res.json(orders);
  }
  else {
    res.status(404)
    throw new Error('No Orders Found')
  }

})
const getTotalOrders = asyncHandler(async(req,res) => {
  const orders = await Order.find({});
  if(orders) {
    res.json(orders)
  } else {
   res.status(404)
   throw new Error('No Orders Found')
  }
})

 export { addOrderItems, updateOrderToPaid,getOrderById, getMyOrders,getTotalOrders};
