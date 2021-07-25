import React from 'react'
import { ExperienceContainer, ExperienceDateLocation, ExperienceStatementList, ExperienceStatement } from './ExperienceInfoElements'
const ExperienceInfo = ({dateLocation, statements}) => {
    return (
        <ExperienceContainer>
            <ExperienceDateLocation>{dateLocation}</ExperienceDateLocation>
            <ExperienceStatementList>
                {statements.map((s) => (
                    <ExperienceStatement>{s}</ExperienceStatement>
                ))}
            </ExperienceStatementList>
        </ExperienceContainer>
    )
}

export default ExperienceInfo
