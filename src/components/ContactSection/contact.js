import React, {useState} from 'react'
import { ContactContainer, ContactText, ContactTitle, ContactTitleName, ContactSectionLine, ContactPrompt, ContactForm, ContactCaption, ContactSubject, ContactMessage, EmailButton, EmailLink } from './ContactElements'
import { ThemeProvider } from 'styled-components'

const Contact = ({colorScheme, id}) => {
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        var replaceBreaks = JSON.stringify(e.target.value).replaceAll("\\n", "%0D%0A");
        var removeQuotes = replaceBreaks.replaceAll("\"", "")
        setMessage(removeQuotes)
    }

    return (
        <ThemeProvider theme={colorScheme}>
            <ContactContainer id={id}>
                <ContactText>
                    <ContactTitle>
                        <ContactSectionLine/><ContactTitleName>Contact</ContactTitleName>
                    </ContactTitle>
                    <ContactPrompt>
                        Please feel free to contact me with about questions about code, employment opprotunities, or really anything! My inbox (<EmailLink href={`mailto:devin.j.narula@gmail.com`}>devin.j.narula@gmail.com</EmailLink>) is open and I'll back to you as soon as I can!
                    </ContactPrompt>
                </ContactText>
                <ContactForm>
                    <ContactCaption>
                        Subject:
                    </ContactCaption>
                    <ContactSubject onChange={handleSubjectChange}></ContactSubject>
                    <ContactCaption>
                        Message:
                    </ContactCaption>
                    <ContactMessage onChange={handleMessageChange}></ContactMessage>
                    <EmailButton href={`mailto:devin.j.narula@gmail.com?&subject=${subject}&body=${message}`}>Send email</EmailButton>
                </ContactForm>
            </ContactContainer>
        </ThemeProvider>
    )
}

export default Contact
