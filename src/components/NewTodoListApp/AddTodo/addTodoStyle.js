import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const MainInput=styled.input` color:#4d4d4d;width:500px;background:white;${tw `h-16 text-3xl pl-4`}`;
const TodoAppFixedDiv = styled.div `
                width:550px;background:white;
                border-bottom:2px solid lightgrey;
                ${tw `flex items-center justify-between`}`;
const DropDown = styled.div`width:50px;${tw `flex items-center justify-center`}`;
export {MainInput,TodoAppFixedDiv,DropDown};