import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import {keyframes,css } from "@emotion/core";



const ProductCartStyle = styled.div `${tw`fixed z-10`}`;
const CartStyle = styled.div`${tw `flex h-screen right-0 top-0 `};
            width:500px;
            animation: ${props=>props.isOk===true?
                css `.7s ease ${keyframes`
                    0%{
                        width:0px;
                    }
                    100%{
                        width:500px;
                    }
                `}
                `
               :
                css `.7s ease ${keyframes`
                    0%{
                        width:500px;
                        
                    }
                    100%{
                        width:0px;
                    }
                `}
                `
            };
            `;
            
  
const CrossStyle = styled.div `
            background:#373c54;
            ${tw `flex items-center justify-center text-white h-16 w-16`}`;

            
const CartButtonStyle= styled.button`
            font-size:45px;
            ${tw `flex items-center justify-center 
            fixed top-0 right-0 h-16 w-16 text-white
            bg-black
            `}`;

const NoOfItemsStyle = styled.div `
            font-size:15px;
            ${tw `flex ml-1 text-orange-500 absolute`}`;

const CartSymbol = styled.div`
            font-size:50px;
            ${tw `flex items-center justify-center text-white h-16 mr-3`}`;
const CartSymbolDivStyle = styled.div 
            `
            min-height:70px;
            ${tw `flex justify-center items-center 
            w-full text-white font-bold text-2xl mt-2`}`;

const CartListStyle = styled.div `overflow:scroll;flex-grow:1`;

const CartFooter = styled.div `
            min-height:150px;
            box-shadow:0px -2px 3px black;
            ${tw `flex flex-col items-center w-full`}`;
            
            
const CartDataStyle = styled.div`background:#373c54;
            
            ${tw `flex flex-col justify-between w-full`}`;
const AddContentStyle = styled.div`height:400px;${tw `flex items-center justify-center text-white`}`

export {CartDataStyle,CartStyle,
ProductCartStyle,
CartSymbolDivStyle,
CartSymbol,
AddContentStyle,
CartListStyle,
NoOfItemsStyle,
CrossStyle,
CartButtonStyle,
CartFooter,
};
