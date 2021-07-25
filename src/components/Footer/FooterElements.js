import styled from 'styled-components'

export const FooterContainer = styled.nav`
    height: 30px;
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const FooterText = styled.h1`
    font-size: 15px;
    color: ${props => props.theme.maintext};
`;