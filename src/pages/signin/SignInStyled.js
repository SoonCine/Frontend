import styled from 'styled-components';
import '../../static//fonts/fonts.css';

export const TitleDiv = styled.div`
  font-size: 50px;
  text-align: center;
  margin-top: 20px;
`;

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
  height: 550px;
  transform: translateY(35%);
  background-color: #f4efeb;
  border-radius: 15px;
  font-family: 'okgung';
  position: absolute;
  left: 125px;
  bottom: 250px;
`;

export const IdInputArea = styled.div`
  position: absolute;
  left: 100px;
  top: 130px;
`;
export const PwInputArea = styled.div`
  position: absolute;
  left: 100px;
  top: 250px;
`;

export const ButtonTotalArea = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 380px;
`;

export const LoginDiv = styled.div`
  position: absolute;
  left: 100px;
`;

export const SignUpDiv = styled.div`
  position: absolute;
  left: 280px;
`;
