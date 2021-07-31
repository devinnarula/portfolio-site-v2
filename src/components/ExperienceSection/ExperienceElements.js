import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    padding-bottom: 20%;
`;


export const ExperienceTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ExperienceTitleName = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.bold};
    margin-left: 50px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
        margin-left: 20px;
    }
`;

export const ExperienceSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 1100px) {
        width: 400px;
    }

    @media screen and (max-width: 800px) {
        width: 160px;
    }

    @media screen and (max-width: 400px) {
        width: 100px;
    }
`;

export const CompaniesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ExperienceList = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ExperienceCompany = styled.button`
    margin: 10px;
    width: 180px;
    border-radius: 20px;
    white-space: nowrap;
    padding: 10px 22px;
    border: ${(props) => props.active ? '3px solid' : '2px solid'};
    border-color: ${(props) => props.active ? props.theme.bold : props.theme.link};
    color: ${props => props.theme.maintext};
    background: ${props => props.theme.background};
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 3px solid;
        border-color: ${(props) => props.active ? props.theme.bold : props.theme.link};
    }

    @media screen and (max-width: 800px) {
        width: 170px;
        font-size: 16px;
    }
`;


export const CompanyDetails = styled.div`
    background: ${props => props.theme.background};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    width: 80%;

    @media screen and (max-width: 800px) {
        width: auto;
    }
`;

export const CompanyText = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    @media screen and (max-width: 800px) {
        align-self: center;
        width: 100%;
    }
`;

export const CompanyTitle = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.bold};
    margin-bottom: 8px;

    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`;

export const JobTitle = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.maintext};
    margin-bottom: 8px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
    }
`;

export const CompanyImgContainer = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        align-self: center;
        width: 100%;
        height: 50%;
    }
`;

export const CompanyImg = styled.img`
    width: 75%;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.bold};
    background-color: transparent;

    @media screen and (max-width: 800px) {
        height: 75%;
        margin: 10px;
    }
`;