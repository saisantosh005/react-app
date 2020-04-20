import styled from '@emotion/styled';
import tw from 'tailwind.macro';




const TodoTitle = styled.div`font-size:150px;
            font-family: Arial, Helvetica, sans-serif;
            color: #ffe6e6;${tw ``}`;
const Button = styled.button`width:150px;background:purple`;
const TodoAppMainScreen=styled.div`
            background:whitesmoke; 
            ${tw ` w-screen flex items-center justify-center`}`;
const TodoAppMainDiv=styled.div`
            width:550px;
            ${tw `flex flex-col justify-center items-center `}`;
const TodoFooter=styled.div`
            background:white;
            ${tw `flex justify-around h-10 items-center`}`;

export {TodoAppMainScreen,TodoAppMainDiv,TodoFooter,TodoTitle,Button};