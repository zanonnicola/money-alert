import money from 'money';

function convertCurrency(data, from, to, ammount = 1) {
  if (typeof ammount !== 'number') {
    throw new Error(`Illegal argument: ${ammount} should be an integer`);
  }
  money.base = 'EUR';
  money.rates = data.rates;
  const rate = money(ammount).from(from).to(to);
  return rate;
}

export default convertCurrency;
