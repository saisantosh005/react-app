import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachButton = styled.button`box-shadow: 2px 2px 4px black;
             background:${props=>props.themeObject.selectedBackgrounds}; ${tw `flex h-8 items-center mr-4 mt-4 px-2 py-1 h-10`}`;
const ButtonSection = styled.div`${tw `flex flex-wrap`}`;
export {EachButton,ButtonSection};
