import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {keyframes,css} from '@emotion/core';

const GridGameAppStyle=styled.div`background:${props=>props.theme.background};
                color:${props=>props.theme.color};
                ${tw `h-screen flex flex-col items-center w-screen justify-center`}`;
const GridGameMainStyle=styled.div`color:${props=>props.theme.color};
                ${tw `h-full flex flex-col items-center justify-center`}`;
export {GridGameMainStyle,GridGameAppStyle};


// const MainDiv = styled.div `width:100px;height:100px;background:white;${tw `w-screen h-screen flex items-center justify-center `}`;
// const SmallDiv = styled.div `width:100px;height:100px;background:orange;${tw `flex items-center justify-center`}`;



// const AnimationStyle = styled.div`
//             width:100%;
//             height:100%;    
//     background:red;
//     animation:${props=>props.isOk===true? 
//     css `
//         1s ease ${
//         keyframes`
//             10%{
//                 width:0px;
//                 height:0px;
//             }
//             100%{   
//                 width:100%;
//                 height:100%;
//             }`
//         }
//         `
//     :
//     css `
//         1s ease ${
//         keyframes`
//             10%{
//                 width:100px;
//                 height:100px;
//             }
//             100%{   
//                 width:0%;
//                 height:0%;
//             }`
//         }
//         `
    
//     }`;
            
// export {AnimationStyle,MainDiv,SmallDiv};
// width:10px;height:10px;background:blue`;