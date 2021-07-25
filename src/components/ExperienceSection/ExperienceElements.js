import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    background: #1f2833;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    margin-bottom: 20%;
`;


export const ExperienceTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ExperienceTitleName = styled.h1`
    font-size: 40px;
    color: #66fcf1;
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
    border: ${(props) => props.active ? '3px solid #66fcf1' : '2px solid #45A29E'};
    color: #c5c6c7;
    background: #1f2833;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: ${(props) => props.active ? '3px solid #66fcf1' : '3px solid #45A29E'};
    }

    @media screen and (max-width: 800px) {
        width: 170px;
        font-size: 16px;
    }
`;


export const CompanyDetails = styled.div`
    background: #1f2833;
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
    color: #66fcf1;
    margin-bottom: 8px;

    @media screen and (max-width: 800px) {
        font-size: 30px;
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
    border: 2px solid #66fcf1;
    background-color: transparent;

    @media screen and (max-width: 800px) {
        height: 75%;
        margin: 10px;
    }
`;