import { Outlet } from 'react-router-dom'
import { Nav } from '../../components/Nav'
import { DefaultLayoutStyled } from './style'
import { CartContextProvider } from '../../contexts/CartContext'

export function DefaultLayout() {
  return (
    <DefaultLayoutStyled>
      <CartContextProvider>
        <Nav></Nav>
        <Outlet></Outlet>
      </CartContextProvider>
    </DefaultLayoutStyled>
  )
}
