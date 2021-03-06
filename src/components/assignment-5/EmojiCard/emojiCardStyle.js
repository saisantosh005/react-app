import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiCardStyle= styled.div`width:250px;height:250px; 
                    
                      background:${props=>props.selectedTheme.cardBackground};
                      ${tw `shadow-custom flex flex-col flex-grow items-center
                      p-4 pt-0 mx-5  my-10 pb-10 `}`;
                      
const Image = styled.img`width:200px;height:200px;object-fit:cover;${tw ``}`;
const ImageName=styled.div`${tw ``}`;
export {EmojiCardStyle,Image,ImageName};

