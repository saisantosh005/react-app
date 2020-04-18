import styled from'@emotion/styled';
import tw from 'tailwind.macro';
// import themeStore from '../../../stores/GridTheme/index.js';

const HeaderStyle =styled.div `
                    font-size:20px;
                    height:150px;
                    ${tw `flex flex-col items-center  justify-around w-full`};
                    `;
const LevelAndTheme=styled.div `
                    ${tw `flex justify-between items-center w-full`};`;
const ThemeModeStyle =styled.div`
                    border:1px solid ${props=>props.boxBorder};
                    font-size:22px;${tw `px-2 py-1`}`;
export {HeaderStyle,LevelAndTheme,ThemeModeStyle};