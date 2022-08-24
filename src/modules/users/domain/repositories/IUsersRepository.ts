import { IPaginateUser } from '@modules/products/domain/models/IPaginateUser';
import { ICreateUsers } from '../models/ICreateUsers';
import { IUser } from '../models/IUser';

type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IUsersRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateUser>;
  findByName(name: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(data: ICreateUsers): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}
