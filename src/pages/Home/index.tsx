import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HomeContainer, Content, Header, HeaderInformation, HeaderInformationBenefits, HeaderInformationText, Benefit, CoffeContainer, TimerContainer, PackageContainer, ShoppingCartContainer, CoffeList } from "./style";
import headerCoffe from "./../../assets/header-coffee.png"
import { TitleXL } from "../../components/TitleXL";
import { CoffeCard } from "../../components/CoffeCard";
import coffeCardImg from "../../assets/coffe_1.png"
import coffeCardImg1 from "../../assets/Coffee.png"
import coffeCardImg2 from "../../assets/Coffee_2.png"
import coffeCardImg3 from "../../assets/Coffee_3.png"
import coffeCardImg4 from "../../assets/Coffee_4.png"
import coffeCardImg5 from "../../assets/Coffee_5.png"
import coffeCardImg6 from "../../assets/Coffee_6.png"
import coffeCardImg7 from "../../assets/Coffee_7.png"
import coffeCardImg8 from "../../assets/Coffee_8.png"
import coffeCardImg9 from "../../assets/Coffee_9.png"
import coffeCardImg10 from "../../assets/Coffee_10.png"
import coffeCardImg11 from "../../assets/Coffee_11.png"
import coffeCardImg12 from "../../assets/Image.png"

const coffes = [
    {id: '1', name: "Expresso Americano", img: coffeCardImg, tags: ['TRADICIONAL'], description: 'O tradicional café feito com água quente e grãos moídos'},
    {id: '2', name: "Expresso Americano", img: coffeCardImg, tags: ['TRADICIONAL'], description: 'O tradicional café feito com água quente e grãos moídos'},
    {id: '3', name: "Expresso Cremoso", img:coffeCardImg1,  tags: ['TRADICIONAL'], description: 'Expresso diluído, menos intenso que o tradicional'},
    {id: '4', name: "Expresso Gelado", img:coffeCardImg2,  tags: ['TRADICIONAL'], description: 'Café expresso tradicional com espuma cremosa'},
    {id: '5', name: "Café com leite", img:coffeCardImg3,  tags: ['TRADICIONAL', 'GELADO'], description: 'Bebida preparada com café expresso e cubos de gelo'},
    {id: '6', name: "Latte", img:coffeCardImg4,  tags: ['TRADICIONAL', 'COM LEITE'], description: 'Meio a meio de expresso tradicional com leite vaporizado'},
    {id: '7', name: "Capucciono", img:coffeCardImg5,  tags: ['TRADICIONAL', 'COM LEITE'], description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'},
    {id: '8', name: "Macchiato", img:coffeCardImg6,  tags: ['TRADICIONAL', 'COM LEITE'], description: 'Café expresso misturado com um pouco de leite quente e espuma'},
    {id: '9', name: "Mocaccino", img:coffeCardImg7,  tags: ['TRADICIONAL', 'COM LEITE'], description: 'Café expresso com calda de chocolate, pouco leite e espuma'},
    {id: '10', name: "Chocolate quente", img:coffeCardImg8,  tags: ['TRADICIONAL', 'COM LEITE'], description: 'Bebida feita com chocolate dissolvido no leite quente e café'},
    {id: '11', name: "Cubano", img:coffeCardImg9,  tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'], description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'},
    {id: '12', name: "Havaiano", img:coffeCardImg10,  tags: ['ESPECIAL'], description: 'Bebida adocicada preparada com café e leite de coco'},
    {id: '13', name: "Árabe", img:coffeCardImg11,  tags: ['ESPECIAL'], description: 'Bebida preparada com grãos de café árabe e especiarias'},
    {id: '14', name: "Irlandês", img:coffeCardImg12,  tags: ['ESPECIAL', 'ALCOÓLICO'], description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly'},
]

export function Home() {
    return (
        <HomeContainer>
            <Header>
                <HeaderInformation>
                    <HeaderInformationText>
                        <TitleXL>Encontre o café perfeito para qualquer hora do dia</TitleXL>
                        <p>Com o Coffe Delivery voce recebe seu café onde estiver, a qualquer hora</p>
                    </HeaderInformationText>
                    <HeaderInformationBenefits>
                        <Benefit>
                            <ShoppingCartContainer><ShoppingCart weight="fill"></ShoppingCart></ShoppingCartContainer>
                            <p>Compra simples e segura</p>
                        </Benefit>
                        <Benefit>
                            <PackageContainer><Package weight="fill"></Package></PackageContainer>
                            <p>Embalagem mantém o café intacto</p>
                        </Benefit>
                        <Benefit>
                            <TimerContainer><Timer weight="fill"></Timer></TimerContainer>
                            <p>Entrega rápida e rastreada</p>
                        </Benefit>
                        <Benefit>
                            <CoffeContainer><Coffee weight="fill"></Coffee></CoffeContainer>
                            <p>O café chega fresquinho pra você</p>
                        </Benefit>
                    </HeaderInformationBenefits>
                </HeaderInformation>
                <div>
                    <img src={headerCoffe} alt="Copo de café com um fundo amarelo" />
                </div>
            </Header>
            <Content>
                <h3>Nossos café</h3>
                
                <CoffeList>
                    { coffes.map((coffe, index) => {
                        return (
                            <CoffeCard coffe={coffe} key={index}></CoffeCard>
                        )
                    })}
                </CoffeList>
            </Content>
        </HomeContainer>
    )
}