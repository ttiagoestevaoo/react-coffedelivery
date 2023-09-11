import styled from "styled-components";

export const CoffeCardContainer = styled.div`
    padding: 0 1.25rem 1.25rem 1.25rem;
    background: ${(props) => props.theme["base-card"]};
    border-radius:  0.375rem 2.25rem;
    display: inline-flex;
    flex-direction:column;
    justify-content: center;
    position: relative;
    margin-top: 2rem;
    max-width: 16rem;
`

export const CoffeCardHeader = styled.div`
    margin-top: -2rem;
    display: flex;
    justify-content: center;
`

export const CoffeCardCategories = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;
    margin-top: 1rem;

    span {
        background-color: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};
        border-radius: 100px;
        padding: 0.25rem 0.5rem;
    }
`

export const CoffeCardDetails = styled.div`
    text-align: center;
    margin-top: 1.25rem;

    div {
        font-family: Baloo 2;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        font-weight: 700;
    }

    p {
        color: ${(props) => props.theme["base-label"]};
        font-size: 0.875rem;
    }
`

export const CoffeCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

export const CoffeAmount = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
    font-size: 0.875;
    color: ${(props) => props.theme["base-text"]};

    h4 {
        line-height: 0.8;
    }

`

export const CoffeCounter = styled.div`
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    align-items: center;
    border-radius: 6px;
`

export const CoffeBtnsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const CoffeQuantityBtn = styled.div`
    color: ${(props) => props.theme.purple};
`

export const CoffeShoppintCardBtn = styled.button`
    padding: 0.5rem;
    background: ${(props) => props.theme.purple};
    border-radius: 6px;
    color: ${(props) => props.theme.white};
    border: 0;
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme["purple-dark"]};
    }
`