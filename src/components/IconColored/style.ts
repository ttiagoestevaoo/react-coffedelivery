import styled from "styled-components";
import { ThemeColors } from "../../styles/themes/default";

interface IconColoredProps {
    variant: ThemeColors
}

export const IconColoredContainer = styled.span<IconColoredProps>(({theme, variant}) => ({
    height: '32px',
    width: '32px',
    borderRadius: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme['white'],
    backgroundColor: theme[variant]
}))

 