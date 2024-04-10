import { Brand } from "../../../domain/models";
import mongoose, { Document } from "mongoose";

export interface BrandDocument extends Brand, Document {}

const brandSchema = new mongoose.Schema<BrandDocument>({
  name: { type: String, required: true },
});

// Creación del modelo Mongoose para el modelo de usuario
export const brandModel = mongoose.model<BrandDocument>('Brand', brandSchema);