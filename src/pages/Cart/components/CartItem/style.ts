import styled from "styled-components";

export const CartItemContainer = styled.div(({}) => ({
    display: 'flex',
    width: '100%',
    padding: '0.25rem 0.5rem',
    alignItems: 'start'
}))

export const CartItemInformations = styled.div(({}) => ({
    flex: 1,
    display: 'flex',
    gap: '1.25rem',
    img: {
        width: '4rem',
        height: '4rem',
    },
    width: '100%',

}))

export const CartItemQnt = styled.div(({}) => ({
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    marginTop: '0.35rem'
}))

export const CartItemTotal = styled.div(({theme}) => ({
    color: theme["base-text"],
    fontWeight: 700
}))