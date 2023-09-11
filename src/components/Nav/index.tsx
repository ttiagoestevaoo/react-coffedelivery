import { Actions, NavContainer, LocaleAction, Logo, ShoppingCartAction, ShoppingCartItemsQnt } from "./style";
import coffeDeliveryLogo from "./../../assets/coffe-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Nav() {
    const {totalItems} = useContext(CartContext)

    return (
        <NavContainer>
            <Logo>
                <NavLink to="/">
                    <img src={coffeDeliveryLogo} alt="Coffe delivery" />
                </NavLink>
            </Logo>
            <Actions>
                <LocaleAction>
                    <MapPin weight="fill" size={22}/>
                    Porto Alegre, RS
                </LocaleAction>
                <ShoppingCartAction href="/carrinho">
                    {!!totalItems && <ShoppingCartItemsQnt>{totalItems}</ShoppingCartItemsQnt>}
                    <ShoppingCart weight="fill" size={22} />
                </ShoppingCartAction>
            </Actions>
        </NavContainer>
    )
}