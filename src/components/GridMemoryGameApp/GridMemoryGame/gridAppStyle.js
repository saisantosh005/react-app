import styled from '@emotion/styled';
import tw from 'tailwind.macro'
// import themeStore from '../../../stores/GridTheme/index.js';


// const theme=themeStore.object[themeStore.selectedTheme];

const GridGameMainStyle=styled.div`background:${props=>props.theme.background}; 
        ${tw `h-screen flex flex-col items-center 
        justify-center`}`;
        
export {GridGameMainStyle};