import styled from 'styled-components'

export const AboutContainer = styled.div`
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

export const AboutText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AboutTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AboutTitleName = styled.h1`
    font-size: 40px;
    color: ${props => props.theme.bold};
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-right: 20px;
    }
`;

export const AboutSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 768px) {
        width: 160px;
    }
`;

export const AboutParagraph = styled.p`
    margin: 15px;
    align-self: center;
    color: ${props => props.theme.maintext};
    font-size: 20px;
    text-align: start;
    max-width: 680px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const AboutSkills = styled.div`
    display: flex;
    width: 75%;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        width: 100%
    }
`;

export const AboutSkillTitle = styled.h1`
    font-size: 25px;
    color: ${props => props.theme.bold};
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const AboutSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    width: 150px;
    border-radius: 20px;
    white-space: nowrap;
    padding: 3px 22px;
    border: 2px solid ${props => props.theme.maintext};
    /* background: ${props => props.theme.border}; */
    color: ${props => props.theme.maintext};
    font-size: 16px;
    text-decoration: none;


    @media screen and (max-width: 768px) {
        width: 130px;
        font-size: 14px;
        border-radius: 15px;
    }
`;

export const SkillIcon = styled.div`
    font-size: 30px;
    margin-top: 5px;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;