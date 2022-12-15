export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type Tuser = {
  username: string,
  vocation: string,
  level: number,
  password?: string,
};

export type Torder = {
  id?: number,
  userId: number,
  productsIds: number[],
};
