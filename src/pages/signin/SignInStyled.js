import styled from "styled-components";
// import "../../static//fonts/fonts.css";

export const WholeSignIn = styled.div`
  height: 100vh; //최상단 div에서 배경사진 넣어줄 때, 100vh로 하면 어느 디스플레이에서든 같은 비율로 꽉 차게 보인다.
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.pinimg.com/564x/a1/2a/bc/a12abcad54f56dfd0804f7a48d025fb4.jpg");
  /* background-color: lightgray; */
`;

export const IntroArea = styled.div`
  width: 440px;
  height: 610px;
  display: flex;
  border: 2px solid orange;
  border-right: 0px;
  border-radius: 20px 0px 0px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.pinimg.com/564x/04/01/00/0401002fdfd15e9c072a00623ec9336b.jpg");
  background-position: 0%;
  // https://i.pinimg.com/564x/8e/8f/20/8e8f20c1bc5a1953c2d0d8abb8f1bbfb.jpg
  /* background-color: whitesmoke; */
  /* background-color: lightgray; */
`;

export const IntroText = styled.p`
  font-size 80px;
  font-weight: bold;
  padding:0px 0px 100px 22px;
  margin: 0px 0px 170px 18px;
  color: white;
  /* background-color: purple; */
`;

export const MainBody = styled.div`
  /* margin: auto; */
  width: 440px;
  height: 610px;
  border: 2px solid orange;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 56px 0px 0px 0px; */
  margin: 0px;
  background-color: rgb(242, 252, 244);
  /* padding: 40px; */
  /* background-color: pink; */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  font-size: 30px;
  width: 250px;
  height: 80px;
  margin: 60px 0px 40px 0px;
  /* background-color: beige; */
`;

export const MainForm = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border: 2px solid lightcoral;
  border-radius: 20px;
  margin: 0px 0px 60px 0px;
  background-image: url("https://i.pinimg.com/564x/b1/14/34/b1143434a07bf15fdf82f55d5ac87764.jpg");
  background-position: 50%;
  /* background-color: lightblue; */
`;

export const LogInTxt = styled.p`
  font-size 30px;
  font-weight: bold;
  text-decoration:underline;
  margin: 4px 0px 8px 38px;
  /* background-color: purple; */
`;

export const WholeInputNButtons = styled.div`
  width: 220px;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px 0px 0px 34px;
  /* background-color: orange; */
`;

export const Ids = styled.div`
  width: 220px;
  /* background-color: green; */
`;

export const TextId = styled.p`
  color: black;
  /* background-color: white; */
`;

export const InputId = styled.input`
  width: 212px;
  height: 28px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  /* background-color: yellow; */
`;

export const Pws = styled.div`
  width: 220px;
  /* background-color: lightseagreen; */
`;

export const TextPw = styled.p`
  color: black;
  /* background-color: white; */
`;

export const InputPw = styled.input`
  width: 212px;
  height: 28px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  /* background-color: yellow; */
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin-top: 30px;
  /* background-color: black; */
`;

export const LogInButton = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 16px;
  border: 2px solid gray;
  margin: 0px 18px 0px 0px;
  cursor: pointer;
  background-color: whitesmoke;
  /* background-color: red; */
`;

export const SignUpButton = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 16px;
  border: 2px solid gray;
  cursor: pointer;
  background-color: whitesmoke;
  /* background-color: red; */
`;
