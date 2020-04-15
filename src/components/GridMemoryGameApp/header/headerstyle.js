import styled from'@emotion/styled';
import tw from 'tailwind.macro';;

const HeaderStyle =styled.div `height:150px;${tw `flex flex-col items-center  justify-around`}`;
const LevelAndTheme=styled.div `width:300px;${tw `flex justify-between`}`;
export {HeaderStyle,LevelAndTheme};