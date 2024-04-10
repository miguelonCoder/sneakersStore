import { User } from "../../domain/models";

export abstract class IUserUseCases {
  abstract getAllUsers(): Promise<User[]>
}