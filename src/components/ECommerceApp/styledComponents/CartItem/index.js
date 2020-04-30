import styled from '@emotion/styled';
import tw  from 'tailwind.macro';

const CartItemMainDivStyle =styled.div `width:100%;
        border-top:1px solid white;
        color:white;${tw `flex mt-1 pt-1 px-5`}`;

const ProductImageStyle=styled.img`width:20%;height:80px;`;

const CartItemDetailsDiv = styled.div`width:80%;${tw`flex flex-col pl-2`}`;

const CartTitleAndCrossStyle =styled.div`${tw `flex justify-between`}`;

const Title=styled.div `color:white;`;

const Cross = styled.div``;

const ProductModelStyle  = styled.div`font-size:13px;${tw `flex justify-between`}`;
const PriceStyle=styled.div`color:gold;font-size:16px;`;
const QuantityStyle =  styled.div``;
export {CartItemMainDivStyle,
ProductImageStyle,
CartItemDetailsDiv,
CartTitleAndCrossStyle,
    Title,
    Cross,
    ProductModelStyle,
    PriceStyle,
    QuantityStyle};