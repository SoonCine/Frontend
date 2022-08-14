import styled from 'styled-components';
import "../../static//fonts/fonts.css"

export const TotalInput = styled.input`
width: ${(props)=> props.width ? props.width : 300}px;
height: ${(props)=>props.height ? props.height : 50}px;
outline: none;
border-radius: 15px;
border: none;
padding-left: 10px;
/* font-family: "okgung"; */
font-size: 16px;
padding-left: 10px;
&:focus{
    outline: 2px solid black;
}
`