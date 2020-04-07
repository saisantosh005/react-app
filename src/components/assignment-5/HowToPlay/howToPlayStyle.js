import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const FooterSectionStyling=styled.div`
                    background:${props=>props.selectedTheme.footerBackground};
                    ${tw `flex flex-col justify-start h-24 px-4 pt-0 pb-8`}`;
const FooterHeading= styled.div`
                    font-size:25px;${tw `font-bold`}`;
const FooterData=styled.div`${tw`ml-8`}`;

export {FooterHeading,FooterData,FooterSectionStyling};