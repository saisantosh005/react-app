import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const WinOrLoseComponentStyling= styled.div`
                        background:${props=>props.selectedTheme.bodyBackground};
                        flex-grow:1;${tw `flex flex-col items-center justify-center`}`;
const ScoreStyling = styled.div`
                        font-size:35px;color:${props=>props.scoreColor};
                        ${tw `mb-3 font-bold`}`;
const GameStateStyling=styled.div`
                        font-size:30px;color:${props=>props.gameStatetextColor};
                        ${tw ` mb-3 font-bold` }`;
const PlayAgainButtonStyling=styled.div`
                        background:#668cff;color:white;font-size:24px;
                        ${tw `px-4 py-2 mb-4 rounded-md`}`;


export {WinOrLoseComponentStyling,PlayAgainButtonStyling,GameStateStyling,ScoreStyling};
