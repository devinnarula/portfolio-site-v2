import styled from 'styled-components'

export const ProjectsContainer = styled.div`
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

export const ProjectsText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ProjectsTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ProjectsTitleName = styled.h1`
    font-size: 40px;
    color: #66fcf1;
    margin-right: 50px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-right: 20px;
    }
`;

export const ProjectsSectionLine = styled.hr`
    height: 1px;
    width: 700px;
    opacity: 0.4;

    @media screen and (max-width: 768px) {
        width: 160px;
    }
`;