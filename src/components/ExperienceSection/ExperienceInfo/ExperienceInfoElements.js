import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ExperienceDateLocation = styled.h1`
    font-size: 25px;
    color: #fff;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const ExperienceStatementList = styled.ul`
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 40px);
    } */
    list-style: none;
`;

export const ExperienceStatement = styled.li`
    font-size: 20px;
    color: ${props => props.theme.maintext};

    &::before {
        content: "▻ ";
        color: ${props => props.theme.bold};
    }
    
    @media screen and (max-width: 800px) {
        font-size: 18px;
    }
`;