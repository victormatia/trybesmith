import { postProducts, getAllProducts } from '../models/product.model';
import { TProduct } from '../types';

export const postProductService = async (product: TProduct): Promise<{ result: TProduct }> => {
  const id = await postProducts(product);

  const postedProduct = {
    id,
    ...product,
  };

  return { result: postedProduct };
};

export const getAllProductsService = async (): Promise<{ result: TProduct[] }> => {
  const products = await getAllProducts();

  return { result: products };
};
