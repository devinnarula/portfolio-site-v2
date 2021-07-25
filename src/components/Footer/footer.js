import React from 'react'
import { FooterContainer, FooterText } from './FooterElements'
import { ThemeProvider } from 'styled-components'

const Footer = ({colorScheme}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <FooterContainer>
                <FooterText>© 2021 Devin Narula</FooterText>
            </FooterContainer>
        </ThemeProvider>
    )
}

export default Footer
