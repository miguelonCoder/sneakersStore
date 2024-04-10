import { User } from "../../../domain/models";
import mongoose, { Document } from "mongoose";

export interface UserDocument extends User, Document {}

const userSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Creación del modelo Mongoose para el modelo de usuario
export const UserModel = mongoose.model<UserDocument>('User', userSchema);