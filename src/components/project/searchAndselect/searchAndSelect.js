import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SearchAndSelectSection=styled.div`${tw `flex h-16 w-screen  justify-between mt-5 p-10 items-center`}`;
const SearchBar=styled.div`box-shadow:2px 2px 2px black; background:${props=>props.themeObject.selectedBackgrounds}; color:lightgrey; ${tw `flex px-3 items-center h-12 w-64`}`;
const SearchInput = styled.input`background:${props=>props.themeObject.selectedBackgrounds};color:${props=>props.themeObject.color};${tw `w-48 ml-2`}`;
export {SearchInput,SearchAndSelectSection,SearchBar};
