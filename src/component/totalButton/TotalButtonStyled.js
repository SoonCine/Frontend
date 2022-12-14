import styled from 'styled-components';
import "../../static//fonts/fonts.css"

export const TotalButton = styled.button`
width: ${(props) => props.width ? props.width : 120}px;
height: ${(props) => props.height ? props.height : 50}px;
border: none;
background-color: ${(props) => props.color ? props.color : 'white'};
border-radius: 10px;
outline: none;
display: ${(props) => props.display ? props.display : 'block'};
/* font-family: "okgung"; */
&:hover{
    cursor: pointer;
    outline: 2px solid black;
}
&:focus{
    outline: 2px solid black;
}
`