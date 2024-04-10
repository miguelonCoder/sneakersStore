import { Product } from "../../../domain/models";
import mongoose, { Document, Schema } from "mongoose";

export interface ProductDocument extends Product, Document {}

const productSchema = new mongoose.Schema<ProductDocument>({
  nameModel: { type: String, required: true },
  price: { type: Number, required: true },
  cantInStock: { type: Number, required: true },
  brand: { type: Schema.Types.ObjectId, ref: 'Brand'}
});

// Creación del modelo Mongoose para el modelo de usuario
export const productModel = mongoose.model<ProductDocument>('Product', productSchema);