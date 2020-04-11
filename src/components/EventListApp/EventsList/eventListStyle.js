import styled from '@emotion/styled';
import tw from 'tailwind.macro';



const EventListDivStyling = styled.div`
                        // background:green;
                        border:2px solid black;
                        ${tw `flex flex-col items-center m-2 p-10 pt-6`}`;
const NoOfEventsStyling =styled.div`font-size:25px;${tw `mb-5`};`

export {EventListDivStyling,NoOfEventsStyling};
