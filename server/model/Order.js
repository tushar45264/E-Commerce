import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [{
    type: Object, 
    required: true,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = model('Order', orderSchema);

export default Order;
