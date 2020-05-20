import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ViewEditToggleMainDivStyle = styled.div`${tw `bg-gray-300 p-4 flex flex-col items-center`}`;
const TitleStyle = styled.h1`${tw `font-bold text-2xl`}`;
const DataAndButtonStle =styled.div`${tw `flex`}`
const InputTagStyle = styled.input`${tw `w-64 border-solid border-blue-400 border-2`}`;

const Button = styled.button`${tw `px-3 py-1 bg-blue-500 text-white ml-3 rounded`}`;

export {ViewEditToggleMainDivStyle,DataAndButtonStle,TitleStyle,InputTagStyle,Button};