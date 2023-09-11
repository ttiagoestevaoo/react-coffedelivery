import { TitleXSContainer } from "./style";

interface TitleMProps {
    children: React.ReactNode
}

export function TitleXS({children}: TitleMProps) {
    return (
        <TitleXSContainer>{children}</TitleXSContainer>
    )
}