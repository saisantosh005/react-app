import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiGameAppStyling = styled.div`
                            color:${props=>props.selectedTheme.color};
                            ${tw `flex flex-col w-screen min-h-screen`}`;
const EmojisListStyling =   styled.div`
                            background:${props=>props.selectedTheme.bodyBackground};
                            ${tw `flex justify-center flex-wrap w-screen`}`;

export {EmojisListStyling,EmojiGameAppStyling};
