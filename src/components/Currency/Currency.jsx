import { getCurrency } from '../../service/currencyApi';
import { useEffect, useState } from 'react';
// import dataCurrency from '../../service/currency.json';
import { Box } from '@chakra-ui/react';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        setIsLoading(true);
        const data = await getCurrency();

        const dataCurrency = data.filter(el => {
          if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
            return el;
          }
          if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
            return el;
          }
          return null;
        });

        setCurrency(dataCurrency);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <>
      {isLoading && <p>Please wait... </p>}

      {error && (
        <Box>
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>
            <div>
              <p>Sorry, too many requests, try again late...</p>
            </div>
          </table>
        </Box>
      )}

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
