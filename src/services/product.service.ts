import postProducts from '../models/product.model';
import { TProduct } from '../types';

const postProductService = async (product: TProduct): Promise<{ result: TProduct }> => {
  const id = await postProducts(product);

  const postedProduct = {
    id,
    ...product,
  };

  return { result: postedProduct };
};

export default postProductService;
