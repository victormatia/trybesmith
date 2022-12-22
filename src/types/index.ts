export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type Tuser = {
  id?: number,
  username?: string,
  vocation?: string,
  level?: number,
  password?: string,
};

export type Torder = {
  id?: number,
  userId: number,
  productsIds: number[],
};

export type Tdecoded = {
  id: number,
  username: string,
  iat?: number,
  exp?: number
};
