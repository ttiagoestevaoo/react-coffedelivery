import styled from "styled-components";

interface ButtonContainerProps {
    variant: 'primary' | 'secondary'
}


export const ButtonContainer = styled.button<ButtonContainerProps>(({theme, variant}) => {
    if (variant === 'primary') {
        return {
            minWidth: '9rem',
            border: 0,
            fontWeight: '700',
            borderRadius: '6px',
            textTransform: 'uppercase',
            padding: '0.75rem 0.5rem',
            color: theme.white,
            backgroundColor: theme.yellow,
            "&:hover": {
                backgroundColor: theme["yellow-dark"],
            },
            fontSize: '0.875rem',
            lineHeight: '1.6',
        }
    } else {
        return {
            lineHeight: '1.6',
            border: 0,
            textTransform: 'uppercase',
            borderRadius: '6px',
            padding: '0.25rem 0.5rem',
            color: theme["base-text"],
            display: 'flex',
            gap:'0.25rem',
            backgroundColor: theme["base-button"],
            fontSize: '0.75rem',
            "&:hover": {
                backgroundColor: theme["base-hover"],
            },
            svg: {
                color: theme.purple
            }
        }
    }
})