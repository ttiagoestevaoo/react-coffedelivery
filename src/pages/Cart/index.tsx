import { MapPin, CurrencyDollar, CreditCard, Bank, Money, Timer } from "phosphor-react";
import { TitleXS } from "../../components/TitleXS";
import { ConfirmCartContainer, AddiotionalInformations, StreetInput, AddressContainer, CardHeader, CardSubtitle, CardText, CartContainer, CartItems, CartItemsTotal, CartResume, CartTotal, DeliveryTotal, FinishOrder, FormGroup, InputRadio, InputStyle, PaymentMethods, StreetComplementInput, UFInput, CityInput, OrderDetails, OrderDetailsItem, OrderDetailsItemDescription, ConfirmOrderImgContainer } from "./style";
import { Card } from "../../components/Card";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { CartItem } from "./components/CartItem";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CartFormData, CartFormSchema } from "./schema";
import { TitleL } from "../../components/TitleL";
import { IconColored } from "../../components/IconColored";
import confirmCoffeDelivery from "./../../assets/confirm-coffe-delivery.png"

export function Cart() {
    const theme = useTheme()
    const {coffes, totalValueItemsFormatted, isEmpty, clearCart, deliveryFormatted, total} = useContext(CartContext)
    const [order, setOrder] = useState<CartFormData | null>(null)

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(CartFormSchema),
    });

    function handleConfirmOrder(data: CartFormData) {
        clearCart()
        setOrder(data)
    }

    if (order) {
        return (
            <ConfirmCartContainer>
            <div>
                <TitleL>Uhu! Pedido confirmado</TitleL>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <OrderDetails>
                    <OrderDetailsItem>
                        <IconColored variant="location">
                            <MapPin weight="fill"></MapPin>
                        </IconColored>
                        <OrderDetailsItemDescription>
                            <span>Entrega em <strong>{order.address.street}, {order.address.number} {order.address.complement}</strong></span>
                            <span>{order.address.neighborhood} - {order.address.city}, {order.address.uf}</span>
                        </OrderDetailsItemDescription>
                    </OrderDetailsItem>
                    <OrderDetailsItem>
                        <IconColored variant="timer">
                            <Timer weight="fill"></Timer>
                        </IconColored>
                        <OrderDetailsItemDescription>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min </strong></span>
                        </OrderDetailsItemDescription>
                    </OrderDetailsItem>
                    <OrderDetailsItem>
                        <IconColored variant="money">
                            <Timer weight="fill"></Timer>
                        </IconColored>
                        <OrderDetailsItemDescription>
                            <span>Pagamento na entrega</span>
                            <span><strong>{order.paymentMethod}</strong> </span>
                        </OrderDetailsItemDescription>
                    </OrderDetailsItem>
                </OrderDetails>
            </div>
            <ConfirmOrderImgContainer>
                <img src={confirmCoffeDelivery} alt="Confirmação do pedido" />
            </ConfirmOrderImgContainer>
        </ConfirmCartContainer>
        )
    }

    if(isEmpty) return <p>Nenhum carrinho ativo</p>

    return (
        <form onSubmit={handleSubmit(handleConfirmOrder)}>
            <CartContainer>
                <AddiotionalInformations>
                    <TitleXS>Complete seu pedido</TitleXS>
                    <Card>
                        <CardHeader>
                            <MapPin color={theme["yellow-dark"]} weight="regular"></MapPin>
                            <div>
                                <CardSubtitle>Endereço de entrega</CardSubtitle>
                                <CardText>Informe o endereço onde deseja receber seu pedido</CardText>
                            </div>
                        </CardHeader>

                        <AddressContainer>
                            <FormGroup>
                                <InputStyle {...register('address.zipCode')} type="text" placeholder="CEP" />
                            </FormGroup>
                            <FormGroup>
                                <StreetInput {...register('address.street')} type="text" placeholder="Rua" />
                            </FormGroup>
                            <FormGroup>
                                <InputStyle {...register('address.number')} placeholder="Número"  type="text" />
                                <StreetComplementInput {...register('address.complement')}  placeholder="Complemento"  type="text" />
                            </FormGroup>
                            <FormGroup>
                                <InputStyle {...register('address.neighborhood')} placeholder="Bairro"  type="text" />
                                <CityInput {...register('address.city')}  placeholder="Cidade"  type="text" />
                                <UFInput {...register('address.uf')}  placeholder="UF"  type="text" />
                            </FormGroup>
                        </AddressContainer>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CurrencyDollar color={theme["purple"]} weight="regular"></CurrencyDollar>
                            <div>
                                <CardSubtitle>Pagamento</CardSubtitle>
                                <CardText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</CardText>
                            </div>
                        </CardHeader>
                           
                        <PaymentMethods>
                            <InputRadio htmlFor="creditCard">
                                <CreditCard color={theme.purple} weight="regular"></CreditCard>
                                <span>Cartao de crédito</span>
                                <input hidden {...register('paymentMethod')} type="radio" id="creditCard" value="Cartao de crédito"/>
                            </InputRadio>
                            <InputRadio htmlFor="debitCard">
                                <Bank color={theme.purple} weight="fill"></Bank>
                                <span>Cartao de débito</span>
                                <input hidden {...register('paymentMethod')} type="radio" id="debitCard" value="Cartao de débito"/>
                            </InputRadio>
                            <InputRadio htmlFor="money">
                                <Money color={theme.purple} weight="fill"></Money>
                                <span>Cartao de débito</span>
                                <input hidden {...register('paymentMethod')} type="radio" id="money" value="Cartao de débito"/>
                            </InputRadio>
                        </PaymentMethods>
                        <p style={{marginTop: '1rem', fontWeight: 'bold'}}>
                            {errors.paymentMethod?.message}
                        </p>
                    </Card>
                </AddiotionalInformations>
                <CartResume>
                    <TitleXS>Cafés selecionados</TitleXS>
                    <Card borderRadius="semi-rounded">
                        <CartItems>
                            {coffes.map(coffe => {
                                return <CartItem key={coffe.id} coffe={coffe} />
                            })}
                        </CartItems>
                        <div>
                            <CartItemsTotal>
                                <span>Total de itens</span>
                                <span>{totalValueItemsFormatted}</span>
                            </CartItemsTotal>
                            <DeliveryTotal>
                                <span>Entrega</span>
                                <span>{deliveryFormatted}</span>
                            </DeliveryTotal>
                            <CartTotal>
                                <span>Total</span>
                                <span>{total}</span>
                            </CartTotal>
                        </div>
                        <FinishOrder>
                            <Button variant="primary" type="submit">Confirmar pedido</Button>
                        </FinishOrder>
                    </Card>
                </CartResume>
            </CartContainer>
        </form>
    )
}
