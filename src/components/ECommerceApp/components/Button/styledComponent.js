import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ButtonStyle = styled.button`
                border-radius:50%;
                width:45px;
                height:45px;
                background:${props=>props.isClicked?"black":" #e6f2ff"};
                color:${props=>props.isClicked?"white":"black"};
                ${tw `flex items-center 
                justify-center p-1 m-1`}`;
export {ButtonStyle};