import getAllOrders from '../models/order.model';
import { Torder } from '../types';

const getAllOrdersService = async (): Promise<{ result: Torder[] }> => {
  const orders = await getAllOrders();

  console.log(orders);

  const covertCamelCase = orders.map((order) => ({
    id: order.id,
    userId: order.user_id,
    productsIds: order.products_id,
  }));

  return { result: covertCamelCase };
};

export default getAllOrdersService;