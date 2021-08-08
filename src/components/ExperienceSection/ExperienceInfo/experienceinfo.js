import React from 'react'
import { ExperienceContainer, ExperienceDateLocation, ExperienceStatementList, ExperienceStatement } from './ExperienceInfoElements'
import { ThemeProvider } from 'styled-components'

const ExperienceInfo = ({colorScheme, dateLocation, statements}) => {
    return (
        <ThemeProvider theme={colorScheme}>
            <ExperienceContainer>
                <ExperienceDateLocation>{dateLocation}</ExperienceDateLocation>
                <ExperienceStatementList>
                    {statements.map((s, index) => (
                        <ExperienceStatement key={index}>{s}</ExperienceStatement>
                    ))}
                </ExperienceStatementList>
            </ExperienceContainer>
        </ThemeProvider>
    )
}

export default ExperienceInfo
