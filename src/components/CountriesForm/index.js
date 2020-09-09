import React from 'react'
import {CountriesFormWrapper, StyledTypography, StyledSelect, StyledTableContainer} from './styled';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const CountriesForm = ({onSearchChange, selectedCountry, search, countries}) => {
    
    
    return (
        <CountriesFormWrapper>
            <StyledTypography  variant="h4" gutterBottom >Choose a country</StyledTypography>
            <StyledSelect onChange={onSearchChange} value={search}>
                {
                countries ? 
                    countries.map(country => 
                        <MenuItem  key={country.name} value={country.name}>{country.name}</MenuItem >
                    ) : 
                    <MenuItem >No options</MenuItem>
                }
            </StyledSelect>
            {selectedCountry &&
                <StyledTableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Country Name</TableCell>
                      <TableCell align="right">Capital</TableCell>
                      <TableCell align="right">Population</TableCell>
                      <TableCell align="right">Currency</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {selectedCountry.name}
                        </TableCell>
                        <TableCell align="right">{selectedCountry.capital}</TableCell>
                        <TableCell align="right">{selectedCountry.population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</TableCell>
                        <TableCell align="right">{selectedCountry.currencies[0].code}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </StyledTableContainer>
            }
        </CountriesFormWrapper>
    )
};

export default CountriesForm;