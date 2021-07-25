import React, { useState } from 'react'
import { Blackbaud, Clemson, ClemsonHonors } from './Data/companydata'
import { ExperienceContainer, ExperienceText, ExperienceTitle, ExperienceTitleName, ExperienceSectionLine, ExperienceItems, ExperienceList, ExperienceCompany, CompanyDetails, CompanyTitle, CompanyImgContainer, CompanyImg } from './ExperienceElements'
import ExperienceInfo from './ExperienceInfo/experienceinfo'

const Experience = ({id}) => {
    const [data, setData] = useState(Blackbaud)
    
    const toggleCompany = (company) => {
        setData(company)
    };

    return (
        <ExperienceContainer id={id}>
                <ExperienceTitle>
                    <ExperienceSectionLine/><ExperienceTitleName>Experience</ExperienceTitleName>
                </ExperienceTitle>
            <ExperienceItems>
                <ExperienceList>
                    <ExperienceCompany active={data.id==='Blackbaud'} onClick={() => toggleCompany(Blackbaud)}>Blackbaud</ExperienceCompany>
                    <ExperienceCompany active={data.id==='Clemson'} onClick={() => toggleCompany(Clemson)}>Clemson</ExperienceCompany>
                    <ExperienceCompany active={data.id==='ClemsonHonors'} onClick={() => toggleCompany(ClemsonHonors)}>Clemson Honors</ExperienceCompany>
                </ExperienceList>
                <CompanyDetails>
                    <ExperienceText>
                        <CompanyTitle>{data.company}</CompanyTitle>
                        {data.experiences.map((ex) => (
                            <ExperienceInfo {...ex}/>
                        ))}
                    </ExperienceText>
                    <CompanyImgContainer>
                        <CompanyImg src={data.picture} alt="Company Picture"/>
                    </CompanyImgContainer>
                </CompanyDetails>
            </ExperienceItems>
        </ExperienceContainer>
    )
}

export default Experience
