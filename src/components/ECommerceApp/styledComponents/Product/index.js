import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const FreeMainStyle = styled.div`width:100%;z-index:1;${tw `flex justify-end`}`;

const ProductMainDivStyle =styled.div  
            `width:200px;
            height:450px;
            position:relative;
            ${tw `flex flex-col justify-between m-2`}`;

const FreeShippingDivStyle = styled.div `
            background:black;
            color:white;
            position:absolute;
            font-size:12px;
            ${tw `flex items-center justify-center p-1`}`;        

const Image=styled.img`width:160px;height:250px;`;
const ProductName = styled.div`

            ${tw `flex flex-wrap justify-center`}`;
const ProductDataStyle = styled.div`${tw `flex flex-col justify-center items-center`}`;

const AddToCart = styled.button`
            background:black;
            color:white;
            height:50px;
            border-radius:5px;${tw `w-full my-2`}`;

const BoldIt = styled.p `display:inline-block;font-size:20px;`;
const PriceDivStyle = styled.div `font-size:14px;`;
const InstallmentsDiv = styled.div `font-size:14px;color:grey`;
export {FreeShippingDivStyle,ProductMainDivStyle,ProductDataStyle,Image,AddToCart,ProductName,
    FreeMainStyle,BoldIt,PriceDivStyle,InstallmentsDiv
};