import React from 'react'
import { ContactContainer, ContactText, ContactTitle, ContactTitleName, ContactSectionLine } from './ContactElements'

const Contact = ({id}) => {
    return (
        <ContactContainer id={id}>
            <ContactText>
                <ContactTitle>
                    <ContactSectionLine/><ContactTitleName>Contact</ContactTitleName>
                </ContactTitle>
            </ContactText>
        </ContactContainer>
    )
}

export default Contact
