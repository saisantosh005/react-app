import styled from "@emotion/styled";
import tw from 'tailwind.macro';


const LoginPageMainDiv = styled.form`
                ${tw `
                w-screen 
                h-screen flex
                items-center 
                justify-center bg-gray-200`}`;
                
const LoginBoxStyle=styled.div`
            background:white;
            ${tw `flex 
            flex-col
            items-center
            justify-center p-8 py-10`}`;

const SignInNameStyled = styled.div `width:200px;font-weight:bold;${tw `mb-4`}`;

const UserNameStyle = styled.input `width:200px;height:40px;border:1px solid lightgrey;${tw `pl-3 mb-3`}`;

const PasswordStyle =styled.input `width:200px;height:40px;border:1px solid lightgrey; ${tw `pl-3 mb-3`}`;

const SignInButtonStyle=styled.button `border-radius:5px;width:200px;height:40px;background:black;color:white;`;
const  ErrorMessage =styled.div `color:red;h-30;width:200px;${tw `mt-2`}`;
export {LoginPageMainDiv,
        SignInNameStyled,
        LoginBoxStyle,
        UserNameStyle,
        PasswordStyle,
        SignInButtonStyle,ErrorMessage};