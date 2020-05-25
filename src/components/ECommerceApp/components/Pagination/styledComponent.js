import styled from  '@emotion/styled';
import tw from 'tailwind.macro';


const MainDivStyle =styled.div `${tw `flex`}`;
const AnchorStyle = styled.button`background:black;
                color:white;
                width:40px;height:40px;
                opacity:${props=>props.disabled?.5:1};
                ${tw `flex justify-center items-center m-1`}`;
const SmallAnchor = styled.a`width:40px;height:40px; ${tw`flex justify-center items-center border-solid border-2 border-black m-1`}`;
const SlashStyle =styled.p`font-size:35px;${tw `flex justify-center items-center mx-1`}`;
export {MainDivStyle,AnchorStyle,SmallAnchor,SlashStyle};