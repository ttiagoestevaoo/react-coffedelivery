import { ReactNode } from "react"
import { IconColoredContainer } from "./style"

const mappedIcons = {
    location: {color: "purple"},
    timer: {color: "yellow"},
    money: {color: "yellow-dark"},
} as const

type IconVariant = keyof typeof mappedIcons

interface IconColoredProps {
    variant: IconVariant
    children: ReactNode
}

export function IconColored({variant, children}: IconColoredProps) {
    const iconColor = mappedIcons[variant].color

    return (
        <IconColoredContainer variant={iconColor}>
            {children}
        </IconColoredContainer>
    )
}