import styled from '@emotion/styled';
import tw  from 'tailwind.macro';
import {keyframes,css} from '@emotion/core';
const EcommerceAppStyle = styled.div`
        background:white;
        ${tw `h-screen w-screen`}`;
const ECommereAPPMainDiv =styled.div`${tw `flex mt-10`}`;
const SignOutButtonStyle = styled.button`
        border:1px solid black;border-radius:5px;${tw `p-1 ml-3 mt-5`}`;

const ToastMessageStyle = styled.div`background:orange;
        width:200px;
        height:60px;
        animation:  ${css`1s ease ${keyframes`
        0%{
        bottom:0;
        opacity:0;
        }
        100%{
            bottom:30px;
            opacity:1;
        }`}`};
        `;
const ToastDivStyle = styled.div `background:grey;${tw `flex justify-center w-screen h-screen`}`;
const ProductCartMainDivStyle = styled.div `width:100%;${tw `flex justify-end`}`; 
const SignOutAndCartStyle=styled.div`${tw `flex justify-start`}`;

export {ToastMessageStyle,ToastDivStyle,
EcommerceAppStyle,ECommereAPPMainDiv,
SignOutButtonStyle,SignOutAndCartStyle,ProductCartMainDivStyle};