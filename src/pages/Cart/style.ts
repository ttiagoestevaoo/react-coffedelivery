import styled from "styled-components";

export const CartContainer = styled.main(({}) => ({
    display: "grid",
    gridTemplateColumns: "4fr 2.5fr",
    gap: '2rem'
}))

export const CardSubtitle = styled.p(({theme}) => ({
    color: theme["base-subtitle"]
}))

export const CardText = styled.p(({theme}) => ({
    fontSize: '0.875rem',
    color: theme["base-text"]
}))

export const CardHeader = styled.div(() => ({
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem'
}))

const CartSection = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
}))


export const AddiotionalInformations = styled(CartSection)(({}) => ({
    flex: 4
}))

export const CartResume = styled(CartSection)(({}) => ({
    flex: 2
}))


export const AddressContainer = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
}))

export const FormGroup = styled.div(({}) => ({
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap'
}))

export const InputStyle = styled.input(({theme}) => ({
    border: '1px solid transparent',
    ":focus, :active": {
        borderColor: theme["yellow-dark"]
    },
    padding: '0.75rem',
    color: theme["base-text"],
    borderRadius: '4px',
    background: theme["base-input"],
    "&::placeholder": {
        color: theme["base-label"]   
    }
}))

export const StreetInput = styled(InputStyle)(() => ({
    flex: 1,
}))

export const StreetComplementInput = styled(InputStyle)(() => ({
    flex: 1,
}))

export const CityInput = styled(InputStyle)(() => ({
    flex: 1,
}))

export const UFInput = styled(InputStyle)(() => ({
    width: "100px"
}))



export const InputRadio = styled.label(({theme})=> ({
    borderRadius: "6px",
    background: theme["base-button"],
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    flex: 1,
    border: '1px solid transparent',
    "&:hover": {
        background: theme["base-hover"]
    },
    "&:has(input:checked)": {
        borderColor: theme.purple
    },
    "input": {
        display: 'none'
    },
    span: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        lineHeight: 1.6
    }
}))

export const PaymentMethods = styled.div(({}) => ({
    display: 'flex',
    gap: '1rem'
}))

export const CartItems = styled.div(({theme}) => ({
    "> div": {
        borderBottom: `1px solid ${theme["base-button"]}`,
        paddingBottom: '1.5rem',
        "&:not(:first-of-type)": {
            paddingTop: '1.5rem',
        }
    },
    marginBottom: '1.5rem'
}))

const CartValue = styled.div(({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem'
}))

export const CartItemsTotal = styled(CartValue)(({
    marginBottom: '2rem'
}))

export const DeliveryTotal = styled(CartItemsTotal)(({
    marginBottom: '1.75rem'
}))

export const CartTotal = styled(CartValue)(({
    marginBottom: '1.75rem',
    fontSize: '1.25rem',
    fontWeight: 700
}))

export const FinishOrder = styled.div(({}) => ({
    "> button": {
        width: '100%'
    }
}))


export const ConfirmCartContainer = styled.div(({}) => ({
    display: 'grid',
    gridTemplateColumns:  'repeat(2, 1fr)',
    gap: '6rem',
    marginTop: '6rem'
}))

export const OrderDetails = styled.div(({theme}) => ({
    padding: '2.5rem',
    marginTop: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    borderRadius: '6px 36px',
    border: `1px solid ${theme["yellow-dark"]}`,
}))

export const OrderDetailsItem = styled.div(({}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
}))

export const OrderDetailsItemDescription = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'column'
}))

export const ConfirmOrderImgContainer = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
}))