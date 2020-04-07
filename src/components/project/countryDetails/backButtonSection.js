import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const BackButtonSection=styled.div` ${tw `flex mt-4 ml-5`}`;
const BackButton=styled.button` box-shadow: 2px 2px 4px black; background:${props=>props.themeObject.selectedBackgrounds};  ${tw `flex items-center h-10 border-none ml-4 w-24 justify-center`}`;
const DashboardButton=styled.button` box-shadow: 2px 2px 4px black; background:${props=>props.themeObject.selectedBackgrounds};  ${tw `h-10 border-none ml-4 w-32`}`;
export {BackButtonSection,BackButton,DashboardButton};
