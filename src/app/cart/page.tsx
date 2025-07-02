import { Metadata } from 'next';
import CartMain from '@/views/cart/cart';

export const metadata: Metadata = {
  title: 'Northstar - Cart Page',
};

const CartPage = () => {
  return <CartMain />;
};
export default CartPage;
