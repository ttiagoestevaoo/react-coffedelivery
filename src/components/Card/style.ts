import styled from "styled-components";

const CardBorderRadiusMapped = {
    normal: '6px', 
    "semi-rounded": '6px 44px', 
}

export type BorderRadiusOption = keyof typeof CardBorderRadiusMapped

interface CardContainerProps {
    borderRadius: BorderRadiusOption
}

export const CardContainer = styled.div<CardContainerProps>(({theme, borderRadius}) => ({
    backgroundColor: theme["base-card"],
    padding: '2.5rem',
    borderRadius: CardBorderRadiusMapped[borderRadius]
}))