import { ReactNode, createContext, useEffect, useState } from "react"
import { CoffeCart, CoffeCartFormatted } from "./types"
import { formatToRealCurrency } from "../../formatters"


interface CartContextType {
    coffes: CoffeCartFormatted[]
    totalItems: number
    totalValueItems: number
    totalValueItemsFormatted: string
    deliveryFormatted: string
    total: string
    isEmpty: boolean
    clearCart: () => void
    addCart: (coffe: CoffeCart) => void
    removeCart: (coffeId: string) => void
    updateCart: ({coffeId, quantity}: {coffeId: string, quantity: number}) => void
}
  
export const CartContext = createContext({} as CartContextType)

export const CoffeValue = 9.90

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps) {
    const [coffes, setCoffes] = useState<CoffeCartFormatted[]>(() => {
        const storedStateAsJson = localStorage.getItem(
            '@coffe-challenge:coffes-1.0.0',
          )
    
        if (storedStateAsJson) return JSON.parse(storedStateAsJson)
    
        return []
    })
    
    const totalItems = coffes.length
    const totalValueItems = coffes.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
    const totalValueItemsFormatted = formatToRealCurrency(totalValueItems)
    const delivery = 3.50
    const deliveryFormatted = formatToRealCurrency(delivery)
    const total = formatToRealCurrency(totalValueItems + delivery)

    const isEmpty = totalItems === 0

    useEffect(() => {
        console.log(coffes)
        const stateJson = JSON.stringify(coffes)
        localStorage.setItem('@coffe-challenge:coffes-1.0.0', stateJson)
    }, [coffes])

    
    function addCart(coffeCart: CoffeCart) {
        const total = coffeCart.quantity * CoffeValue

        const coffeCartFormatted = {
            ...coffeCart,
            total,
            totalFormmated: formatToRealCurrency(total)
        }

        setCoffes([...coffes, coffeCartFormatted])
    }

    function removeCart(coffeId: string) {
        setCoffes(coffes.filter(coffe => coffe.id !== coffeId))
    }

    function updateCart({coffeId, quantity}: {coffeId: string, quantity: number}) {
        setCoffes(coffes.map(coffe => {
            if(coffe.id === coffeId) {
                const total = CoffeValue * quantity

                return {
                    ...coffe,
                    quantity,
                    total,
                    totalFormmated: formatToRealCurrency(total)
                }
            }
            return coffe
        }))
    }

    function clearCart() {
        setCoffes([])
    }

    return <CartContext.Provider value={{deliveryFormatted, total, clearCart, isEmpty, coffes, totalItems, addCart, removeCart, totalValueItemsFormatted, totalValueItems, updateCart}}>{children}</CartContext.Provider>
}