import React, { useState } from 'react'
import { Blackbaud, Clemson, ClemsonHonors } from './Data/companydata'
import { ExperienceContainer, ExperienceTitle, ExperienceTitleName, ExperienceSectionLine, CompaniesContainer, ExperienceList, ExperienceCompany, CompanyText, CompanyDetails, CompanyTitle, CompanyImgContainer, CompanyImg } from './ExperienceElements'
import ExperienceInfo from './ExperienceInfo/experienceinfo'
import { ThemeProvider } from 'styled-components'

const Experience = ({colorScheme, id}) => {
    const [data, setData] = useState(Blackbaud)
    
    const toggleCompany = (company) => {
        setData(company)
    };

    return (
        <ThemeProvider theme={colorScheme}>
            <ExperienceContainer id={id}>
                <ExperienceTitle>
                    <ExperienceSectionLine/><ExperienceTitleName>Experience</ExperienceTitleName>
                </ExperienceTitle>
                <CompaniesContainer>
                    <ExperienceList>
                        <ExperienceCompany active={data.id==='Blackbaud'} onClick={() => toggleCompany(Blackbaud)}>Blackbaud</ExperienceCompany>
                        <ExperienceCompany active={data.id==='Clemson'} onClick={() => toggleCompany(Clemson)}>Clemson</ExperienceCompany>
                        <ExperienceCompany active={data.id==='ClemsonHonors'} onClick={() => toggleCompany(ClemsonHonors)}>Clemson Honors</ExperienceCompany>
                    </ExperienceList>
                    <CompanyDetails>
                        <CompanyText>
                            <CompanyTitle>{data.company}</CompanyTitle>
                            {data.experiences.map((ex) => (
                                <ExperienceInfo colorScheme={colorScheme} {...ex}/>
                            ))}
                        </CompanyText>
                        <CompanyImgContainer>
                            <CompanyImg src={data.picture} alt="Company Picture"/>
                        </CompanyImgContainer>
                    </CompanyDetails>
                </CompaniesContainer>
            </ExperienceContainer>
        </ThemeProvider>
    )
}

export default Experience
