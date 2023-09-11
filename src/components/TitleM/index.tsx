import { TitleMContainer } from "./style";

interface TitleMProps {
    children: React.ReactNode
}

export function TitleM({children}: TitleMProps) {
    return (
        <TitleMContainer>{children}</TitleMContainer>
    )
}