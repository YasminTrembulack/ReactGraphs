import styled from "styled-components";

export const StyledCard = styled.div`
    width: 300px;
    height: 200px;

    border: 1px solid rgba(0,0,0,.6);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    transition: 0.3s;

    &:hover{
        transform: scale(5) rotate(360deg);
    }
`

export const StyledList = styled.div`
    width: 95%;
    max-width: 1000px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;

   
`