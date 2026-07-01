import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  image: string;
}

const ItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IItem>("Item", ItemSchema);