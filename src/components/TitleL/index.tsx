import { TitleLContainer } from "./style";

interface TitleXLProps {
    children: React.ReactNode
}

export function TitleL({children}: TitleXLProps) {
    return (
        <TitleLContainer>{children}</TitleLContainer>
    )
}