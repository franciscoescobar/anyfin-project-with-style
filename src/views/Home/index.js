import React, {useState, useEffect} from 'react'
import CountriesForm from '../../components/CountriesForm'
import {HomeWrapper} from './styled';
import ExchangeForm from '../../components/ExchangeForm';
import api from '../../utils/api';
const Home = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [search, setSearch] = useState("");
    const [countries, setCountries] = useState([]);    
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        const selectedCountry = countries.find(country => country.name === e.target.value);
        api.getDataFromCountry(selectedCountry.alpha3Code).then(dataCountry => {

            setSelectedCountry(dataCountry);
        })
    }

    useEffect(() => {
        api.getCountries().then(countries => {
            setCountries(countries);
        })
    }, [])
    return (
        <HomeWrapper>
            <CountriesForm onSearchChange={handleSearchChange} selectedCountry={selectedCountry} search={search} countries={countries}></CountriesForm>
            <ExchangeForm selectedCountry={selectedCountry}></ExchangeForm>
        </HomeWrapper>
    )
};

export default Home;