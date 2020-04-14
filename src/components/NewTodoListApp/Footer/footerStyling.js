import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TodoFooterStyling=styled.div`background:white;width:550px;color:#777777;
                    ${tw `flex justify-around h-10 items-center`}`;
// box-shadow:15px 15px  black;
// box-shadow:10px 10px yellow;
// box-shadow:5px 5px blue;
            
const HoverDiv=styled.div `&:hover{border:2px solid rgba(175,47,47,0.2)};${tw ``}`;
const UnderLine=styled.div`&:hover{text-decoration:underline}`;
export {TodoFooterStyling,HoverDiv,UnderLine};
