import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const Logo = styled.h1`
    display: inline
`

export const Actions = styled.div`
    display: flex;
    gap: 8px;
`

export const BaseAction = styled.a`
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    gap: 4px;
    align-items: center;
`

export const LocaleAction = styled(BaseAction)`
    background-color: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    a {
        color: ${(props) => props.theme["purple"]};
    }
`

export const ShoppingCartAction = styled(BaseAction)`
    position: relative;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
`

export const ShoppingCartItemsQnt = styled.span`
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};
    
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    top: -5px;
    right: -10px;
    position: absolute;

`

