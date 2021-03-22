const formatNumber = number => {
  if (!number) {
    return null;
  }

  const thousand = '.';
  const decimal = ',';
  const symbol = number < 0 ? '-' : '';
  const integer = String(parseInt((number = Math.abs(Number(number) || 0).toFixed(2))));
  const mod = integer.length > 3 ? integer.length % 3 : 0;

  return (
    symbol +
    (mod ? integer.substr(0, mod) + thousand : '') +
    integer.substr(mod).replace(/(\d{3})(?=\d)/g, `$1${thousand}`) +
    (decimal +
      Math.abs(number - integer)
        .toFixed(2)
        .slice(2))
  );
};

export const formatMoney = number => {
  number = formatNumber(number);
  return number ? `R$ ${number}` : '';
};

export const setCookie = (name, value) => {
  document.cookie = `${name}=${value || ''};`;
};

export const getCookie = name => {
  const cookies = document.cookie.split('; ');
  const cookiesList = cookies.map(c => {
    const cookieValues = c.split('=');
    return { [cookieValues[0]]: cookieValues[1] };
  });
  return cookiesList[name];
};
