import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const MainDivStyle = styled.div`${tw `bg-gray-300 p-4 flex flex-col items-center`}`;
const TitleStyle = styled.h1`${tw `font-bold text-2xl`}`;
const DataStyle =styled.div`${tw `flex`}`;

const Button = styled.button`${tw `px-3 py-1 bg-blue-500 text-white ml-3`}`;

export {MainDivStyle,DataStyle,TitleStyle,Button};