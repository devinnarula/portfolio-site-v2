import React, { useState } from 'react'
import { Blackbaud, Clemson, ClemsonHonors, Principal } from './Data/companydata'
import { ExperienceContainer, ExperienceTitle, ExperienceTitleName, ExperienceSectionLine, CompaniesContainer, ExperienceList, ExperienceCompany, CompanyText, CompanyDetails, CompanyTitle, JobTitle, CompanyImgContainer, CompanyImg } from './ExperienceElements'
import ExperienceInfo from './ExperienceInfo/experienceinfo'
import { ThemeProvider } from 'styled-components'

const Experience = ({colorScheme, id}) => {
    const [data, setData] = useState(Principal)
    
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
                        <ExperienceCompany key={'Princpal'} active={data.id==='PFG'} onClick={() => toggleCompany(Principal)}>Principal</ExperienceCompany>
                        <ExperienceCompany key={'Blackbaud'} active={data.id==='Blackbaud'} onClick={() => toggleCompany(Blackbaud)}>Blackbaud</ExperienceCompany>
                        <ExperienceCompany key={'Clemson'} active={data.id==='Clemson'} onClick={() => toggleCompany(Clemson)}>Clemson</ExperienceCompany>
                        <ExperienceCompany key={'ClemsonHonors'} active={data.id==='ClemsonHonors'} onClick={() => toggleCompany(ClemsonHonors)}>Clemson Honors</ExperienceCompany>
                    </ExperienceList>
                    <CompanyDetails>
                        <CompanyText>
                            <CompanyTitle>{data.company}</CompanyTitle>
                            <JobTitle>{data.title}</JobTitle>
                            {data.experiences.map((ex, index) => (
                                <ExperienceInfo key={index} colorScheme={colorScheme} {...ex}/>
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
