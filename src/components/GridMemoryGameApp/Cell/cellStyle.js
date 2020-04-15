import styled from '@emotion/styled';
import tw  from 'tailwind.macro';


const CellStyle = styled.div `width:80px;height:80px;background:green;
&:hover{background:blue;}; ${tw `flex justify-center m-1`}`;
export {CellStyle};