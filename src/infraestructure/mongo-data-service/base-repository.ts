import { Model, Document } from 'mongoose';
import { IGenericRepository } from '../../domain/generic-repository/generic-repository.abstract';

export class BaseRepository<T extends Document> implements IGenericRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
      this.model = model;
  }

  async findById(id: string): Promise<T | null> {
      return this.model.findById(id).exec();
  }

  async findAll(): Promise<T[]> {
      return this.model.find().exec();
  }

  async create(data: Partial<T>): Promise<T> {
      return this.model.create(data);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
      return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
      const result = await this.model.findByIdAndDelete(id).exec();
      return !!result;
  }
}