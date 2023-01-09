import styled from "styled-components";

export const Wrapper = styled.p`

font-family: ${(props)=>props.fontFamily};
font-style: normal;
font-weight: ${props=>props.fontWeight};
font-size: ${props=>props.fontSize};
line-height: ${props=>props.lineHeight};
color:${props=>props.color};
margin:${props=>props.margin};
text-align:${props=>props.textAlign};
`
