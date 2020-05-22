import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ButtonStyle = styled.button`
            background:${props=>props.styledObject.background};
            color:${props=>props.styledObject.color};
            height:${props=>props.styledObject.height};
            border:${props=>props.styledObject.border};
            border-radius:${props=>props.styledObject.border_radius};
            ${tw `w-full my-2`};
            `;
// border:1px solid black;border-radius:5px;${tw `p-1 ml-3 mt-5`}`;
export {ButtonStyle};