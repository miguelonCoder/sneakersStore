import { Discount } from "../../../domain/models";
import mongoose, { Document, Schema } from "mongoose";

export interface DiscountDocument extends Discount, Document {}

const discountSchema = new mongoose.Schema<DiscountDocument>({
  user:   { type: Schema.Types.ObjectId, ref: 'User'},
  brand: { type: Schema.Types.ObjectId, ref: 'Brand'},
  value: { type: Number, required: true}
});

// Creación del modelo Mongoose para el modelo de usuario
export const discountModel = mongoose.model<DiscountDocument>('Discount', discountSchema);