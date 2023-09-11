import { Trash } from "phosphor-react"
import { Button } from "../../../../components/Button"
import { InputNumber } from "../../../../components/InputNumber"
import coffeCardImg from "../../../../assets/coffe_1.png"
import { CartItemContainer, CartItemInformations, CartItemQnt, CartItemTotal } from "./style"
import { CoffeCartFormatted } from "../../../../contexts/CartContext/types"
import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"

interface CartItemProps {
    coffe: CoffeCartFormatted
}

export function CartItem({coffe}: CartItemProps) {
    const {removeCart, updateCart} = useContext(CartContext)

    function handleUpdateCartItem({quantity, coffeId}: {quantity: number, coffeId: string}) {
        updateCart({quantity, coffeId})
    }
    
    function handleRemoveCartItem(coffeId: string) {
        removeCart(coffeId)
    }   

    return (
        <CartItemContainer>
            <CartItemInformations>
                <img src={coffeCardImg} alt="" />
                <div>
                    <p>{coffe.name}</p>
                    <CartItemQnt>
                        <InputNumber value={coffe.quantity} onChange={(value: number) => handleUpdateCartItem({quantity: value, coffeId: coffe.id})}></InputNumber>
                        <Button onClick={() => handleRemoveCartItem(coffe.id)} variant="secondary">
                            <Trash fontSize="1rem"></Trash>
                            <span>Remover</span>
                        </Button>
                    </CartItemQnt>
                </div>
            </CartItemInformations>
            <CartItemTotal>{coffe.totalFormmated}</CartItemTotal>
        </CartItemContainer>
    )
}