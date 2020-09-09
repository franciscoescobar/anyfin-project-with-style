import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import TableContainer from '@material-ui/core/TableContainer';

export const CountriesFormWrapper = styled(Paper)`
    width: 70%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const StyledTypography = styled(Typography)`
    flex: 1 0 100%;
`;
export const StyledSelect = styled(Select)`
    flex-basis: 250px;
`;
export const StyledTableContainer = styled(TableContainer)`
    width: 90% !important;
`;