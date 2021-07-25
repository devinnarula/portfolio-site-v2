import React from 'react'
import { ContactContainer, ContactText, ContactTitle, ContactTitleName, ContactSectionLine } from './ContactElements'
import { ThemeProvider } from 'styled-components'

const Contact = ({colorScheme, id}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <ContactContainer id={id}>
                <ContactText>
                    <ContactTitle>
                        <ContactSectionLine/><ContactTitleName>Contact</ContactTitleName>
                    </ContactTitle>
                </ContactText>
            </ContactContainer>
        </ThemeProvider>
    )
}

export default Contact
