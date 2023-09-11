import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonContainer } from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    icon?: ReactNode
    variant: 'primary' | 'secondary'
}



export function Button({children, onClick, variant = 'primary'}: ButtonProps) {
    
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {children}
        </ButtonContainer>
    )
}