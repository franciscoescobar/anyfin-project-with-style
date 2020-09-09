import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { StyledPaper, Footer, Header} from './styled';
import api from '../../utils/api';

const CurrencyPaper = ({selectedCountry}) => {
    const [money, setMoney] = useState("");
    const [localCurrency, setLocalCurrency] = useState("");

    const onMoneyChange = (e) => {
        setMoney(e.target.value);
    }

    useEffect(() => {
        console.log(selectedCountry && selectedCountry);
        selectedCountry && api.getCurrencyFromCountry(selectedCountry.currencies[0].code).then(localMoney => {
            setLocalCurrency(Object.values(localMoney)[0] * Number(money));
        });
    }, [money, selectedCountry]);
    
    return(
    <>
        <StyledPaper elevation={3}>
                <Header>
                    <img src="https://www.countryflags.io/se/flat/64.png" alt="SEK Flag" />
                    <Typography variant="h5" gutterBottom>
                        SEK
                    </Typography>
                </Header>
                <Footer>
                    <TextField id="standard-basic" value={money} onChange={onMoneyChange}/>
                </Footer>
        </StyledPaper>

        <StyledPaper elevation={3}>
            <Header>
                <img src={`https://www.countryflags.io/${selectedCountry ? selectedCountry.alpha2Code : "AR"}/flat/64.png`}  alt="Local Flag"/>
                    <Typography variant="h5" gutterBottom>
                        {selectedCountry ? selectedCountry.currencies[0].code : "ARS"}
                    </Typography>
                </Header>
                <Footer>
                    <TextField id="standard-basic" value={localCurrency}/>
                </Footer>
        </StyledPaper>
    </>
)};

export default CurrencyPaper;