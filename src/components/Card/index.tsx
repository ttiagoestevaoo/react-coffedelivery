import { ReactNode } from "react";
import { BorderRadiusOption, CardContainer } from "./style";

interface CardProps {
    children: ReactNode
    borderRadius?: BorderRadiusOption
}

export function Card({children, borderRadius = 'normal'}:CardProps) {
    return (
        <CardContainer borderRadius={borderRadius}>
            {children}
        </CardContainer>
    )
}