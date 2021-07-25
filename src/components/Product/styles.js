import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    width: 430px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.2);
    text-align: center;
`;

export const ProductName = styled.strong`
    font-size: 1rem;
    color: #888;
`;

export const Description = styled.p`
    margin-top: 10px;
    font-size: 0.85rem;
    color: #888;
`;

export const ProductImage = styled.div`
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 300px;
        height: auto;
    }
`;

export const Price = styled.p`
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.5rem;
`;

export const BuyButton = styled(Button)`
    width: 200px;
    margin-top: 10px;
`;