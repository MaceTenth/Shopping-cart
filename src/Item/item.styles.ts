import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
height: 100%;
border-radius: 0 0 20px 20px;

button{
    border-radius: 0 0 20px 20px;
    background-color: gray;
    color: white;
}

button:hover,:focus{
  
    background-color: lightgrey;
    color: black;
}



img{
    max-height: 20vh;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}


div{
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

}
`;