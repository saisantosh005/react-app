import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TopSection = styled.div`background:${props=>props.themeObject.selectedBackgrounds};box-shadow: 0px 8px 8px -8px black;${props=>props.themeObject.border}; ${tw`w-screen flex h-16 items-center justify-between 
                    p-10 border-solid `}`;
const Span=styled.span`${tw `flex items-center`}`;

export {TopSection,Span};
