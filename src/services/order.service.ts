import { verifyToken } from '../auth/jwt';
import { getAllOrders, postOrder } from '../models/order.model';
import { updateProduct } from '../models/product.model';
import { Torder } from '../types';

export const getAllOrdersService = async (): Promise<{ result: Torder[] }> => {
  const orders = await getAllOrders();

  console.log(orders);

  const covertCamelCase = orders.map((order) => ({
    id: order.id,
    userId: order.user_id,
    productsIds: order.products_id,
  }));

  return { result: covertCamelCase };
};

export const postOderService = async (productsIds: number[], authorization?: string) => {
  if (!authorization) return { message: 'Token not found' };
  
  try {
    const { id } = verifyToken(authorization);
    const orderId = await postOrder(id);

    await Promise.all(productsIds.map(async (productsId) => updateProduct(productsId, orderId)));
  
    return { result: { userId: id, productsIds } };
  } catch (e) {
    return { message: 'Invalid token' };
  }
};
