import { formatMoney, getCookie } from '../helpers';

describe('formatMoney', () => {
  it('return money text correctly', () => {
    const money = formatMoney(0.5);
    expect(money).toEqual('R$ 0,50');

    const money2 = formatMoney(5);
    expect(money2).toEqual('R$ 5,00');

    const money3 = formatMoney(5000);
    expect(money3).toEqual('R$ 5.000,00');
  });

  it('return empty when not number', () => {
    const money = formatMoney([]);
    expect(money).toEqual('');

    const money2 = formatMoney('texto');
    expect(money2).toEqual('');

    const money3 = formatMoney({});
    expect(money3).toEqual('');

    const money4 = formatMoney([]);
    expect(money4).toEqual('');
  });
});

describe('getCookie', () => {
  beforeAll(() => {
    Object.defineProperty(global.document, 'cookie', { value: 'existentCookie=cookieValue' });
  });

  it('Get existent cookie', () => {
    const cookie = getCookie('existentCookie');
    expect(cookie).toEqual('cookieValue');
  });

  it('Get nonexistent cookie', () => {
    const cookie = getCookie('nonexistentCookie');
    expect(cookie).toEqual(undefined);
  });
});
