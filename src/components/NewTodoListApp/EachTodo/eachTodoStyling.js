import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const EachTodoStyling=styled.div`background:white;border-bottom:2px solid lightgrey;width:550px;${tw `flex items-center justify-between py-1`}`;
const EachTodoCheckBoxStyling=styled.input` width:45px;height:45px;border-radius:50%;${tw ` ml-3`}`;
const EachTodoInput=styled.input`${
            props=>props.disabled===true?
            'text-decoration:line-through':'text-decoration:none'};
            // &:hover{border:2px solid black};
            ${props=>props.isChanged===true?'border:2px solid #e1e1e1':'border:none'};
            color:#4d4d4d;width:400px;height:50px;font-size:35px;${tw ``}`;
const EachTodoCrossStyling=styled.div`color:red; ${tw `mr-3`}`;
export {EachTodoStyling,EachTodoCheckBoxStyling,
        EachTodoInput,EachTodoCrossStyling};

