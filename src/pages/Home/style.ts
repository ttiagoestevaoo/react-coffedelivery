import styled from "styled-components";
import headerCoffe from "./../../assets/header-background.svg"

export const HomeContainer = styled.div`
    /* background-image: url('${headerCoffe}') no-repeat;  */
    /* TODO: ADD BACKGROUND IMAGE*/
`

export const Header = styled.header`
    display: flex;
    gap: 5rem;
    padding: 4rem 0px;
    background: rgba(250,250,250,0.6);
    backdrop-filter: blur(1rem);
`

export const HeaderInformation = styled.div`
    display: flex;
    gap: 4rem;
    flex-direction: column;
`

export const HeaderInformationText = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`

export const HeaderInformationBenefits = styled.div`
    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    gap: 0.75rem;
`

export const Content = styled.main``

export const Benefit = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const IconContainer = styled.span`
    height: 32px;
    width: 32px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white}
`

export const ShoppingCartContainer = styled(IconContainer)`
    background-color: ${(props) => props.theme["yellow-dark"]};
`

export const CoffeContainer = styled(IconContainer)`
    background-color: ${(props) => props.theme["purple"]};
`

export const PackageContainer = styled(IconContainer)`
    background-color: ${(props) => props.theme["base-text"]};
`

export const TimerContainer = styled(IconContainer)`
    background-color: ${(props) => props.theme["yellow"]};
`

export const CoffeList = styled.div(({}) => ({
    display: 'flex',
    gap: '2rem 2.5rem',
    flexWrap: "wrap"
}))