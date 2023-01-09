import styled from 'styled-components'


export const Wrapper = styled.button`
width:${({width})=>width ? width : '328px'};
height:56px;
border-radius:8px;
box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.16);
background: ${({bgColor})=>bgColor};
cursor:pointer;
border:none;
font-family: 'Epilogue', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 14px;
margin:${({margin})=>margin ? margin : '24px 0 0 0'};
color:#ffffff;
`