import React from 'react'
import CurrencyPaper from '../CurrencyPaper';
import { ExchangeFormWrapper } from './styled';

const ExchangeForm = ({selectedCountry}) => (
    <ExchangeFormWrapper>
        <CurrencyPaper selectedCountry={selectedCountry}/>
    </ExchangeFormWrapper>
);

export default ExchangeForm;