import styled from 'styled-components';
import '../../static//fonts/fonts.css';

export const MainBody = styled.div`
  width: 750px;
  height: 800px;
  border: 3px solid white;
  border-radius: 10px;
  transform: translateY(20%);
  margin: auto;
  font-family: 'okgung';
`;

export const MainForm = styled.form`
  width: 500px;
  height: 650px;
  transform: translateY(20%);
  background-color: #f4efeb;
  border-radius: 15px;
  font-family: 'okgung';
  position: absolute;
  left: 125px;
  bottom: 200px;
`;

export const IdArea = styled.div`
  position: absolute;
  left: 85px;
  top: 100px;
`;

export const PwArea = styled.div`
  position: absolute;
  left: 85px;
  top: 200px;
`;

export const PwCheckArea = styled.div`
  position: absolute;
  left: 85px;
  top: 300px;
`;
export const NicknameArea = styled.div`
  position: absolute;
  left: 85px;
  top: 400px;
`;

export const ButtonArea = styled.div`
  position: absolute;
  left: 190px;
  top: 500px;
`;

export const TitleTextArea = styled.div`
  position: absolute;
  left: 225px;
  top: 20px;
  font-size: 20px;
`

export const IdInput = styled.input`
  width: ${(props) => (props.width ? props.width : 300)}px;
  height: ${(props) => (props.height ? props.height : 50)}px;
  outline: none;
  border-radius: 15px 0px 0px 15px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  padding-left: 10px;
  &:focus {
    outline: 2px solid black;
  }
`;

export const IdButton = styled.button`
  width: ${(props) => (props.width ? props.width : 120)}px;
  height: ${(props) => (props.height ? props.height : 53)}px;
  border: none;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  outline: none;
  background-color: #ffde8a;
  /* font-family: "okgung"; */
  &:hover {
    cursor: pointer;
    outline: 2px solid black;
  }
`;

export const PwInput = styled.input`
  width: ${(props) => (props.width ? props.width : 300)}px;
  height: ${(props) => (props.height ? props.height : 50)}px;
  outline: none;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  padding-left: 10px;
  &:focus {
    outline: 2px solid black;
  }
`;
