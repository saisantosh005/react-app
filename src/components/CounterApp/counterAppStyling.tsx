import styled from '@emotion/styled';
import tw  from 'tailwind.macro';

const CounterAppStyling=styled.div`
            ${tw `flex flex-col justify-center w-screen h-screen items-center`}`;

const CounterTitleStyling=styled.div`
            ${tw `text-5xl font-bold mb-5`}`;
const CounterButtonAndInputStyling= styled.div`
            ${tw `flex`}`;

const Button =styled.div`
            background:#2b6cb0;
            cursor:pointer;
            ${tw `text-white h-16 w-16 text-3xl font-bold
            flex items-center justify-center rounded-md`}`;

const InputTagStyling=styled.input `

            text-align:center;
            width:160px;
            ${tw `text-3xl h-16 mx-4 flex justify-center border-2 border-orange-400`}`;

export  { CounterTitleStyling,CounterButtonAndInputStyling,CounterAppStyling,Button,InputTagStyling};