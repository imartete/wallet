import { getCurrency } from '../../service/currencyApi';
import { useEffect, useState } from 'react';
// import dataCurrency from '../../service/currency.json';
import { Box } from '@chakra-ui/react';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const data = await getCurrency();

        const dataCurrency = data.filter(el => {
          if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
            return el;
          }
          if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
            return el;
          }
        });

        setCurrency(dataCurrency);
      } catch {
        setError(true);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <>
      {currency && (
        <Box>
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>

            <tbody>
              {currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                const rateBuyCurrency = Number(rateBuy).toFixed(2);
                const rateSellCurrency = Number(rateSell).toFixed(2);
                return (
                  <tr key={currencyCodeA}>
                    <td>{codeCurrency}</td>
                    <td>{rateBuyCurrency}</td>
                    <td>{rateSellCurrency}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      )}
    </>
  );
};
