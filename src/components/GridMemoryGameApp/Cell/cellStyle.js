import styled from '@emotion/styled';
import tw  from 'tailwind.macro';
import {keyframes,css } from '@emotion/core';

// const CellParentDivStyle = styled.div`
// // width:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
// //             height:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
//             ${tw `flex justify-center items-center`};
//           `;
const CellParentDivStyle = styled.div`
            width:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
            height:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
            background:${props=>(props.theme==="light"?'#2a4365':"#616c7c")};
            ${tw `flex items-center justify-center`}`;        
            
const CellStyle = styled.button`
            width:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
            height:${props=>(props.fieldWidth.gridWidth/(props.fieldWidth.gridSize)-8)}px;
            ${tw `flex justify-center items-center`};
             background:${props=>(props.theme==="light"?
            props.shouldShowHiddenCells===true?(props.eachModelData.isHidden===true?'#10e6d0':"red"):"#2a4365":
            props.shouldShowHiddenCells===true?(props.eachModelData.isHidden===true?'#52ad7d':"red"):'#616c7c')};
            ${tw `flex justify-center`};
            animation:${props=>props.shouldShowHiddenCells===true&&props.eachModelData.isHidden===true? 
    css `
      .2s ease ${
        keyframes`
            0%{
                width:0%;
                height:0%;
            }
            100%{   
                width:100%;
                height:100%;
            }`
        }
        `
    :
    css `
        .2s ease ${
        keyframes`
            1%{
                width:100%;
                height:100%;
            }
            100%{   
                width:0%;
                height:0%;
            }`
        }
        `
    
    }
           `;
            
export {CellStyle ,CellParentDivStyle};

// '#2a4365':"#616c7c")};
//             ${tw `flex items-center justify-center`}`;
            // background:#4fd1c5;//darkhidden
            //  background:#2a4365//darknormal
// ,CellParentDivStyle