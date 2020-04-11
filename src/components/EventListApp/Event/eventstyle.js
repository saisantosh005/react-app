import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachEventStyling=styled.div`
                    border:2px solid black;
                    width:650px;
                    ${tw `flex justify-around items-center py-3 px-8 mb-4`}`;
const EachEventInputDivStyle=styled.div`width:300px;${tw `flex flex-col justify-center`}`;
const InputNameStyle=styled.div`width:300px;height:40px;${tw `mb-1`}`;
const InputLocationStyle=styled.div`width:300px;height:40px;${tw `mt-1`}`;

const EditButtonStyling=styled.div`border:2px solid black;${tw `flex items-center justify-center py-3  px-8 mb-3`}`;
const DeleteButtonStyling=styled.div`border:2px solid black;${tw ` flex items-center justify-center py-3 px-8`}`;

const EachEventButtonStyling=styled.div `${tw `flex flex-col`}`;
const EditInputNameStyle=styled.input`width:250px;border:2px solid black;
                    height:40px;width:300px;${tw `mb-2 pl-3`}`;
const EditInputLocationStyle=styled.input`
                    height:40px;
                    width:300px;border:2px solid black;${tw `mt-2 pl-3`}`;



export {EachEventStyling,
    EachEventInputDivStyle,InputNameStyle,
    InputLocationStyle,
    EditButtonStyling,DeleteButtonStyling,EachEventButtonStyling,
    EditInputLocationStyle,EditInputNameStyle
    };



