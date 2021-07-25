import { useState, useEffect } from 'react';
import SaleImage from './assets/Sale.png';
import { 
  Container, 
  Vantagens,
  Products, 
  Vantagem, 
  Footer,
  SubscribeContainer,
  Subscribe,
  SubscribeButton,
} from './styles/app.style';
import { FaTruck, FaSearchDollar, FaThumbsUp, FaInfoCircle, FaUser } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Input from './components/Input';
import Product from './components/Product'; 
import api from './service/api';

function App() {
  const [emailList, setEmailList] = useState([]);
  const [emailsLenght, setEmailsLength] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    function loadEmailList() {
      const emails = JSON.parse(localStorage.getItem('black-friday'));
      if (emails) {
        setEmailsLength(emails.length);
        setEmailList(emails);
      }
    };

    loadEmailList();
  }, [emailsLenght]);

  useEffect(() => {
    async function loadProducts() {
      const result = await api.get('products');
      if (result) {
        setProducts(result.data);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    function loadCart() {
      const productCart = JSON.parse(localStorage.getItem('black-friday-cart'));
      if (productCart) {
        setCart(productCart);
      }
    };

    loadCart();
  }, []);

  function handleSubscribeButton() {
    const profileDTO = {
      name,
      email,
    };

    setEmailList([...emailList, profileDTO]);
    localStorage.setItem('black-friday', JSON.stringify([...emailList, profileDTO]));
    setEmailsLength(emailsLenght + 1);
    setEmail('');
    setName('');

    alert('Obrigado por se cadastrar. Em breve teremos mais novidades');
  }

  function handleClickBuy({ Id, Title, Price }) {
    const productDTO = {
      Id,
      Title,
      Price,
    }

    setCart([...cart, productDTO]);
    localStorage.setItem('black-friday-cart', JSON.stringify([...cart, productDTO]));
  }

  return (
    <>
      <Container />
      <Vantagens>
        <Vantagem>
          <FaTruck size={30} />
          <strong>Entrega rápida</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaSearchDollar size={30} />
          <strong>Preço baixo garantido</strong>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaThumbsUp size={30} />
          <strong>12 meses de garantia</strong>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi.
          </p> 
        </Vantagem>
        <Vantagem>
          <FaInfoCircle size={30} />
          <strong>Assitência 24hrs</strong>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam 
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p> 
        </Vantagem>
      </Vantagens>
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Ofertas imperdíveis ;)</h1>
      <Products>
        {products && products.map(item => (
          <Product
            key={item.id}
            Name={item.Title}
            ImageUrl={item.imageUrl}
            Value={item.Price}
            onClickBuy={() => handleClickBuy({Id: item.id, Title: item.title, Price: item.Price})}
          >
            <img src="https://i.imgur.com/lyRlFLt.png" alt="drone-example" style={{ width: '300px', height: 'auto' }} />
          </Product>
        ))}
      </Products>
      <Footer>
        <SubscribeContainer>
          <img src={SaleImage} alt='black-friday'/>
          <Subscribe>
            <p>Cadastre-se agora e não deixe perder essa ótima oportunidade de 
              realizar seu sonho.
            </p>
            <Input 
              icon={FaUser} 
              placeholder='Nome' 
              onChange={event => setName(event.target.value)}
              value={name}
            />
            <Input 
              icon={FiMail} 
              placeholder='E-mail' 
              onChange={event => setEmail(event.target.value)}
              value={email}
            />
            <SubscribeButton onClick={handleSubscribeButton}>
              Quero participar!
            </SubscribeButton>
          </Subscribe>
        </SubscribeContainer>
      </Footer>
      <div>{email}</div>
    </>
  );
}

export default App;
