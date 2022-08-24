import { DataSource } from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Orders';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CreateProducts1658607262187 } from './migrations/1658607262187-CreateProducts';
import { CreateUsers1658714859416 } from './migrations/1658714859416-CreateUsers';
import { CreateUserTokens1658841792939 } from './migrations/1658841792939-CreateUserTokens';
import { CreateCustomers1659759893758 } from './migrations/1659759893758-CreateCustomers';
import { CreateOrders1659040773305 } from './migrations/1659040773305-CreateOrders';
import { AddCustomersIdToOrders1659760682153 } from './migrations/1659760682153-AddCustomersIdToOrders';
import { CreateOrdersProducts1659059164798 } from './migrations/1659059164798-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1659059316526 } from './migrations/1659059316526-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1659059532510 } from './migrations/1659059532510-AddProductIdToOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'Lu180513!',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1658607262187,
    CreateUsers1658714859416,
    CreateUserTokens1658841792939,
    CreateCustomers1659759893758,
    CreateOrders1659040773305,
    AddCustomersIdToOrders1659760682153,
    CreateOrdersProducts1659059164798,
    AddOrderIdToOrdersProducts1659059316526,
    AddProductIdToOrdersProducts1659059532510,
  ],
});
