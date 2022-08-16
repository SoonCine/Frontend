import styled from "styled-components";
import "../../static//fonts/fonts.css";

export const TitleDiv = styled.div`
  background-image: src="스크린샷 2022-08-16 20.35.03.png"
  /* font-size: 50px;
  text-align: center; */
  margin-top: 40px;
  background-color: orange;
`;

export const MainBody = styled.div`
  width: 600px;
  height: 600px;
  border: 3px solid black;
  border-radius: 20px;
  transform: translateY(10%);
  margin: auto;
  font-family: "okgung";
  background-color: yellow;
`;

export const MainForm = styled.form`
  width: 400px;
  height: 380px;
  transform: translateY(35%);
  background-color: #f4efeb;
  border-radius: 15px;
  font-family: "okgung";
  position: absolute;
  left: 125px;
  bottom: 250px;
  background-color: lightblue;
`;

export const IdInputArea = styled.div`
  position: absolute;
  left: 100px;
  top: 130px;
  background-color: lightcoral;
`;
export const PwInputArea = styled.div`
  position: absolute;
  left: 100px;
  top: 250px;
  background-color: black;
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
  background-color: red;
`;

export const SignUpDiv = styled.div`
  position: absolute;
  left: 280px;
  background-color: brown;
`;
