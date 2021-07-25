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
    margin-bottom: 15%;
`;

export const ExperienceText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-left: 20px;
    }
`;

export const ExperienceSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 768px) {
        width: 160px;
    }
`;

export const ExperienceItems = styled.div`
    display: flex;
`;

export const ExperienceList = styled.div`
    display: flex;
    flex-direction: column;
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

    @media screen and (max-width: 768px) {
        width: 170px;
        font-size: 16px;
    }
`;

export const CompanyDetails = styled.div`
    background: #1f2833;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    position: relative;
    z-index: 1;
`;

export const CompanyTitle = styled.h1`
    font-size: 40px;
    color: #66fcf1;
`;

export const CompanyImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 40%;
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

    @media screen and (max-width: 800px) {
        height: 75%;
        margin: 10px;
    }
`;