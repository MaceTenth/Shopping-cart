import styled from "styled-components"; 
import { IconButton } from "@material-ui/core";

export const Wrapper = styled.div`
margin: 40px


button{
    
    background-color: gray;
    color: white;
}

svg{
    color: darkblue;
}

svg:hover{
  
    color: limegreen;
}



`;

export const StyledButton = styled(IconButton)`
position:fixed;
z-index: 100;
right: 20px;
top: 10px;
background: lightgray;


`

