import styled from '@emotion/styled';
import {keyframes } from '@emotion/core';
import tw  from 'tailwind.macro';

const GridFieldStyle = styled.div`
        width:${props=>props.fieldWidth.gridWidth}px;
        height:${props=>props.fieldWidth.gridWidth}px;
        ${tw `flex justify-between flex-wrap`}`;
const GridFIledStyledDiv = styled.div`
    animation:1s ease ${keyframes`{
        0%{
            opacity:0
        }
        20%{
            opacity:0.1
        }
        50%{
            opacity:0.3
        }
        80%{
            opacity:0.5
        }
        90%{
            opacity:0.7
        }
        100%{
            opacity:1
        }
    `};`;
export {GridFieldStyle,GridFIledStyledDiv};