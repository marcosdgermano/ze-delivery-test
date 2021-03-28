import { getCart, updateCart } from '../cart';
import { setCookie } from '../../utils/helpers';

jest.mock('../../utils/helpers', () => ({
  __esModule: true,
  getCookie: jest.fn().mockReturnValueOnce('1,2,3').mockReturnValueOnce('').mockReturnValueOnce('1,2,3'),
  setCookie: jest.fn(),
}));

describe('getCart', () => {
  it('with products', () => {
    const result = getCart();
    expect(result).toEqual(['1', '2', '3']);
  });

  it('empty', () => {
    const result = getCart();
    expect(result).toEqual([]);
  });
});

describe('updateCart', () => {
  it('remove', () => {
    updateCart('1');
    expect(setCookie).toHaveBeenCalled();
  });

  it('add', () => {
    updateCart('1');
    expect(setCookie).toHaveBeenCalled();
  });
});
