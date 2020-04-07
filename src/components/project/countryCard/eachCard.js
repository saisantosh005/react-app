import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CardImage = styled.img`${tw `w-48 h-48 object-cover`}`;
const Card = styled.li`background:${props=>props.themeObject.selectedBackgrounds}; ${tw `flex flex-col  h-auto w-48 ml-10 my-8 items-center flex-wrap shadow-md`}`;
const DataOfEachCard=styled.div`${tw `flex flex-col h-48 px-5 flex-wrap w-full`}`;
const ContryName=styled.h3`${tw `flex py-2 flex-wrap font-black`}`
export {CardImage,Card,DataOfEachCard,ContryName};