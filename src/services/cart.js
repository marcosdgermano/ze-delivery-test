import { getCookie, setCookie } from '../utils/helpers';

export const getCart = () => {
  const cookie = getCookie('cart');
  return cookie ? cookie.split(',') : [];
};

export const updateCart = productId => {
  let cart = getCart();

  if (cart.includes(productId)) {
    cart = cart.filter(id => id !== productId);
  } else {
    cart = cart.concat(productId);
  }

  setCookie('cart', cart.join());
};
