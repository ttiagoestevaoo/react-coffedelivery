import { CoffeAmount, CoffeBtnsContainer, CoffeCardCategories, CoffeCardContainer, CoffeCardDetails, CoffeCardFooter, CoffeCardHeader, CoffeShoppintCardBtn } from "./style";
import { ShoppingCart } from "phosphor-react";
import { TitleM } from "../TitleM";
import { InputNumber } from "../InputNumber";
import { useContext, useState } from "react";
import { CartContext, CoffeValue } from "../../contexts/CartContext";
import { Coffe, CoffeCart } from "../../contexts/CartContext/types";

interface CoffeCardProps {
    coffe: Coffe
}

export function CoffeCard({coffe}: CoffeCardProps) {
    const [total, setTotal] = useState(1)
    const {addCart} = useContext(CartContext)

    function handleAddCart(coffe: CoffeCart) {
        addCart(coffe)
        setTotal(1)
    }

    return (
        <CoffeCardContainer>
            <CoffeCardHeader>
                <img src={coffe.img} alt="" />
            </CoffeCardHeader>
            <CoffeCardCategories>
                {coffe.tags.map((tag, index) => {
                    return (
                        <span key={index}>{tag}</span>
                    )
                })}
            </CoffeCardCategories>
            <CoffeCardDetails>
                <div>{coffe.name}</div>
                <p>{coffe.description}</p>
            </CoffeCardDetails>
            <CoffeCardFooter>
                <CoffeAmount>R$ <TitleM>{CoffeValue.toLocaleString('pt-br', {minimumSignificantDigits:3})}</TitleM></CoffeAmount>
                <CoffeBtnsContainer>
                    <InputNumber value={total} onChange={setTotal}></InputNumber>
                    <CoffeShoppintCardBtn onClick={() => handleAddCart({...coffe, quantity: total})}><ShoppingCart weight="fill" fontSize="22px"/></CoffeShoppintCardBtn>
                </CoffeBtnsContainer>
            </CoffeCardFooter>

        </CoffeCardContainer>
    )
}