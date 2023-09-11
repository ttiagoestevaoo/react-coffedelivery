export interface Coffe {
    id: string
    name: string
    description: string
    img: string
    tags: string[]
}

export interface CoffeCart extends Coffe {
    quantity: number
}

export interface CoffeCartFormatted extends CoffeCart {
    total: number
    totalFormmated: string
}
