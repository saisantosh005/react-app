import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const AddEventStyling =styled.div`
                    border:2px solid black;
                    width:730px;
                    ${tw `flex justify-around items-center py-10 px-10`}`;
const AddEventInputTagsDivStyling=styled.div`width:300px;${tw `flex flex-col`}`;
const InputNameStyle=styled.input`width:250px;border:2px solid black;
                    
                    height:40px;width:300px;${tw `mb-2 pl-3`}`;
const InputLocationStyle=styled.input`
                    height:40px;
                    width:300px;border:2px solid black;${tw `mt-2 pl-3`}`;
const AddEventButtonStyling=styled.div`height:50px;border:2px solid black;${tw `p-3`}`;
export  {AddEventStyling,AddEventInputTagsDivStyling,
        InputNameStyle,InputLocationStyle,AddEventButtonStyling};