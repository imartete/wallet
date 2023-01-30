import { getCurrency } from '../../service/currencyApi';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import {
  CurrencyTableWrap,
  CurrencyTable,
  TableHead,
  TableData,
} from './Currency.styled';

const Currency = () => {
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
      {isLoading && <Loader />}

      {error && (
        <CurrencyTableWrap>
          <CurrencyTable>
            <thead>
              <tr>
                <TableHead>Currency</TableHead>
                <TableHead>Purchase</TableHead>
                <TableHead>Sale</TableHead>
              </tr>
            </thead>
            <td colspan="3">Sorry, too many requests, try again late...</td>
            {/* <div>
              <p>Sorry, too many requests, try again late...</p>
            </div> */}
          </CurrencyTable>
        </CurrencyTableWrap>
      )}

      {currency && (
        <CurrencyTableWrap>
          <CurrencyTable>
            <thead>
              <tr>
                <TableHead>Currency</TableHead>
                <TableHead>Purchase</TableHead>
                <TableHead>Sale</TableHead>
              </tr>
            </thead>

            <tbody>
              {currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                const rateBuyCurrency = Number(rateBuy).toFixed(2);
                const rateSellCurrency = Number(rateSell).toFixed(2);
                return (
                  <tr key={currencyCodeA}>
                    <TableData>{codeCurrency}</TableData>
                    <TableData>{rateBuyCurrency}</TableData>
                    <TableData>{rateSellCurrency}</TableData>
                  </tr>
                );
              })}
            </tbody>
          </CurrencyTable>
        </CurrencyTableWrap>
      )}
    </>
  );
};

export default Currency;
