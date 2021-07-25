import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ExperienceDateLocation = styled.h1`
    font-size: 25px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 25px;
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
    list-style: '>' inside;
`;

export const ExperienceStatement = styled.li`
    font-size: 20px;
    color: #c5c6c7;
`;