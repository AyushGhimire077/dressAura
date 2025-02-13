import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ productId: String, quantity: Number, price: Number }],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "cancelled"],
    default: "pending",
  },
  number: { type: Number, required: true },
  address: { type:String, required: true},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
