import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const LoginPageStyled=styled.div`
            ${tw `h-screen w-screen 
            flex flex-col items-center
            justify-center`}`;
const UserNameStyle = styled.input`${tw `w-64 h-12 pl-3 mb-10`}`;
const UserPassword =styled.input `${tw `w-64 h-12 pl-3 `}`;
const SubmitButtonStyle=styled.button`
            width:100px;
            height:40px;
            background:blue;
            color:white;
            font-weight:bold;
            border-radius:10px;
            ${tw `flex items-center justify-center mt-10`}`
export {LoginPageStyled,SubmitButtonStyle,UserNameStyle,UserPassword};