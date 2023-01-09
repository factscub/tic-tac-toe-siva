import styled from "styled-components";

export const Wrapper = styled.div`
div{
    text-align:start;
    padding-left:10px;
}
`
export const Form=styled.div`
margin-bottom:70px;

`

export const PageHeader=styled.div`

margin:10px 0 25px 0;
`
export const MessageBox = styled.p`
width:328px;
height:74px;
background:${({bgColor})=>bgColor};
border-radius:8px;
margin:70px 0 0;
display:flex;
justify-content:center;
align-items:center;
color:white;

font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;

`