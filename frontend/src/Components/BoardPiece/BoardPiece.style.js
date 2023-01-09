import styled from "styled-components";

export const Wrapper = styled.div`
width:115px;
height:115px;
overflow:hidden;
cursor:pointer;
border-top:5px solid yellow;
   
&:not(&:nth-child(3n)){
    border-right:5px solid yellow;
    
}

`