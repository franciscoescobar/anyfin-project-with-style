import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'

export const StyledPaper = styled(Paper)`
    width: 250px;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
`
export const Footer = styled.footer`
    flex: 1 0 100%;
    display: flex;
    * > input {
        font-weight: 300;
        font-size: 36px;
        margin-left: 1rem;
    }
`;
export const Header = styled.header`
    flex: 1 0 100%;
    display: flex;
    height: 64px;
    margin-right: 1rem;
    > img {
        border-radius: 26px;
    }
    > h5 {
        margin: 1rem;
        font-weight: 500;
    }
`;