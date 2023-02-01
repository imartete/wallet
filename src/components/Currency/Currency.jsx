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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCurrency() {
      try {
        setIsLoading(true);
        const data = await getCurrency();
        const dataCurrency = await data.filter(el => {
          if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
            return el;
          }
          if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
            return el;
          }
          return null;
        });

        setCurrency(dataCurrency);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
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
            {!currency ? (
              <tr>
                <td colSpan="3">
                  Sorry, too many requests, try again later...
                </td>
              </tr>
            ) : (
              currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
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
              })
            )}
          </tbody>
        </CurrencyTable>
      </CurrencyTableWrap>
    </>
  );
};

export default Currency;
