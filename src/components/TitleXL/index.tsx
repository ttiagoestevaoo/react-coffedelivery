import { TitleXLContainer } from "./style";

interface TitleXLProps {
    children: React.ReactNode
}

export function TitleXL({children}: TitleXLProps) {
    return (
        <TitleXLContainer>{children}</TitleXLContainer>
    )
}