import '../css/BodyContent/Exchange/ShowRates/rate-data.css'
import '../css/BodyContent/Exchange/ShowRates/rate-select.css'
import '../css/BodyContent/Exchange/ShowRates/rate-data-td.css'
import { useEffect, useState } from 'react';

function ShowRates({ rates, currencies }) {

    const [currentRates, setCurrentRates] = useState([]);

    const handleChangeRate = (e,currentRate) => {
        const copyCurrencies= [...currentRates];
        const indexToModify= copyCurrencies.indexOf(currentRate);
        copyCurrencies[indexToModify]=e.target.value;
        setCurrentRates(copyCurrencies);
    }

    useEffect(() => {
        setCurrentRates(rates);
    }, [rates]);

    return (
        <table className='table'>
            <tbody className='table-body'>
                {currentRates.map(rate =>
                    <tr key={rate} className="rate-data">
                        <td className='rate-data__td'>
                            <select defaultValue={rate} className='rate-select' onChange={(event) => handleChangeRate(event,rate)}>
                                {currencies.map(currency =>
                                    <option value={currency[0]} key={`${rate}-${currency}`}>{currency[0]}</option>
                                )}
                            </select>
                        </td>
                        <td className='rate-data__td'>
                            {(currencies.find(currency => currency[0] === rate))[1]}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default ShowRates;