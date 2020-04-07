import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachCountryDetails=styled.div`${tw `flex my-16 `}`;
const CardDataDivWithTitle=styled.div`width:600px;${tw `flex flex-col pl-12 pb-12`}`;
const Image = styled.img`width:350px;height:220px; ${tw `ml-8 mt-10 object-cover `}`;
const TheoryData= styled.div`${tw `flex flex-col p-3 w-64 leading-loose`}`;
const AllSpanTags=styled.div`${tw `flex flex-wrap`}`;
const CountryDetailsDiv=styled.div`color:${props=>props.themeObject.color};
background:${props=>props.themeObject.background}`;

export {CountryDetailsDiv,Image,TheoryData,AllSpanTags,EachCountryDetails,CardDataDivWithTitle};