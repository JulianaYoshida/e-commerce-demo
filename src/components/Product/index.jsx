import { 
    Container, 
    ProductName,
    ProductImage, 
    Price,
    BuyButton,
} from './styles';

const Product = ({Name, ImageUrl, Value, Description, onClickBuy}) => {
    return (
        <Container>
            <ProductImage>
                <img src={ImageUrl} alt={Name} />
            </ProductImage>
            <ProductName>{Name}</ProductName>
            {Description && <Description>{Description}</Description>}
            <Price>{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(Value)}</Price>
            <BuyButton onClick={onClickBuy}>Comprar</BuyButton>
        </Container>
    )
}

export default Product;