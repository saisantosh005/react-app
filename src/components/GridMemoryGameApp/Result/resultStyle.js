import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ResultDivStyle=styled.div`${tw `flex flex-col items-center justify-center mt-5`}`;
const Button =styled.button`
                    background:#668cff;
                    background:#668cff;
                    color:white;
                    font-size:24px;
                    ${tw `px-4 py-2 mb-4 rounded-md`};
                    `;
const GreetingStyle =styled.div `
                    font-size:30px;
                    color:#00b359;
                    ${tw ` mb-4 font-bold`};
                    `;
const ScoreStyle = styled.div `
                    font-size:40px;
                    font-weight:bold;
                    ${tw `mb-4`};
                    `;
export{ResultDivStyle,GreetingStyle,Button,ScoreStyle};
