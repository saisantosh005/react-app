import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const MainDivStyle = styled.div`${tw `bg-gray-400 p-4 flex flex-col items-center`}`;
const TitleStyle = styled.h1`${tw `font-bold text-2xl`}`;
const DataAndButtonStyle =styled.div`${tw `flex`}`;
const Button = styled.button`${tw `px-3 py-1 bg-blue-500 text-white ml-3 rounded`}`;

export {MainDivStyle,DataAndButtonStyle,TitleStyle,Button};