import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const HeaderPart=styled.div`background:${props=>props.selectedTheme.headerBackground};
        ${tw `h-20 flex items-center px-4 py-2 w-screen justify-between`}`;
        
const GameNameStyling=styled.h4`font-size:30px;${tw ``}`;
const ScoreAndThemeDivStyling = styled.div`width:450bpx;${tw ` flex items-center justify-end`}`;
const Score = styled.div`${tw `flex items-center mx-3 font-bold` }`;
const TopScore=styled.div`${tw `flex items-center mx-3 font-bold`}`;
const ScoreNumberStyling=styled.p`font-size:20px;${tw `font-bold ml-2`}`;
const ThemeButtonStyle = styled.div`border:1px solid ${props=>props.selectedTheme.borderColor}; ${tw`p-2 flex ml-3`}`;

export {HeaderPart,GameNameStyling,ScoreAndThemeDivStyling,Score,TopScore,ScoreNumberStyling,ThemeButtonStyle}; 