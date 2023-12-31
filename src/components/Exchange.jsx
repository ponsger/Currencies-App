import '../css/BodyContent/Exchange/exchange.css'
import '../css/BodyContent/Exchange/base-element.css'
import '../css/BodyContent/Exchange/element.css'

import { useEffect, useState } from 'react';
import ShowRates from './ShowRates';
import { rates as defaultRates } from '../data/defaultRates';
import { apiKey } from '../data/apiKey';

function Exchange() {

    const [rates, setRates] = useState([...defaultRates]);
    const [currencies, setCurrencies] = useState({});
    const [base, setBase] = useState("BTC");

    const handleChangeBase = (e) => {
        setBase(e.target.value);
    }

    const getAllCurrencies = async() => {
        const currenciesRequest= await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=BTC`);
        const currenciesData = await currenciesRequest.json();
        setCurrencies(currenciesData);
    }

    useEffect(() => {
        getAllCurrencies();
    }, [base])

    return (
        <section className='exchange'>
            <div className='base-element'>
                {currencies.rates ?
                    <select className='base' defaultValue="BTC" onChange={(event) => handleChangeBase(event)}>
                        {Object.keys(currencies.rates)
                            .map(rate =>
                                <option key={rate} value={rate}>{rate}</option>)
                        }
                    </select>
                    :
                    "Loading..."
                }
            </div>

            <div className='rates'>
                {currencies.rates ?
                    <ShowRates rates={rates} currencies={Object.entries(currencies.rates)} />
                    : "Loading..."
                }

            </div>
        </section>
    );
}

export default Exchange;