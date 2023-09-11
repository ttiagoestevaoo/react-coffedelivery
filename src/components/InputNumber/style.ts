import styled from "styled-components"

export const InputNumberContainer = styled.div`
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    align-items: center;
    border-radius: 6px;
`

export const QuantityBtn = styled.button`
    color: ${(props) => props.theme.purple};
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme["purple-dark"]};
    }

    &:disabled {
        color: ${(props) => props.theme["base-text"]};
    }
`