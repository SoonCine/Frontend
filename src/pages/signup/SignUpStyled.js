import styled from "styled-components";
// import "../../static//fonts/fonts.css";

export const WholeSignUp = styled.div`
  height: 100vh; //최상단 div에서 배경사진 넣어줄 때, 100vh로 하면 어느 디스플레이에서든 같은 비율로 꽉 차게 보인다.
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.pinimg.com/564x/a1/2a/bc/a12abcad54f56dfd0804f7a48d025fb4.jpg");
  /* background-color: lightgray; */
`;

export const MainBody = styled.div`
  /* margin: auto; */
  width: 500px;
  height: 590px;
  border: 2px solid orange;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 56px 0px 0px 0px; */
  background-color: rgb(242, 252, 244);
`;

export const MainForm = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 15px;
  /* background-color: lightgreen; */
`;
export const SignUpTxt = styled.p`
  margin: 40px 0px 0px 24px;
  font-weight: bold;
  text-decoration:underline;
  /* text-underline-position: under; */
  font-size: 30px;
  /* background-color: red; */
`;
export const WrapIdPwNickBtn = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: space-between;
  align-items: left;
  margin: 40px auto;
  /* background-color: navy; */
`;

export const IdArea = styled.div`
  /* padding: 2px; */
  /* margin: 0px 0px 100px 0px; */
  /* background-color: lightpink; */
`;

export const IdInput = styled.input`
  height: 30px;
  width: 230px;
  border-radius: 6px;
  border: 2px solid black;
  margin: 0px 10px 0px 0px;
  /* background-color: white; */
`;

export const IdButton = styled.button`
  width: 100px;
  height: 36.4px;
  border-radius: 6px;
  border: 2px solid black;
  cursor: pointer;
  /* background-color: lightgreen; */
`;

// export const PwArea = styled.div`
//   height: 80px;
//   background-color: lightgray;
// `;

export const PwInput1 = styled.input`
  height: 30px;
  width: 340px;
  border-radius: 6px;
  border: 2px solid black;
  /* margin: 0px 0px 36px 0px; */
  /* background-color: orange; */
`;
export const PwInput2 = styled.input`
  height: 30px;
  width: 340px;
  border-radius: 6px;
  border: 2px solid black;
  /* margin: 0px 0px 36px 0px; */
  /* background-color: orange; */
`;

export const NicknameArea = styled.div`
  /* margin-top: 12px; */
  /* padding: 2px; */
  /* background-color: lightskyblue; */
`;

export const NickInput = styled.input`
  height: 30px;
  width: 230px;
  border-radius: 6px;
  border: 2px solid black;
  margin: 0px 10px 0px 0px;
  /* background-color: yellow; */
`;

export const NickButton = styled.button`
  width: 100px;
  height: 36.4px;
  border-radius: 6px;
  border: 2px solid black;
  cursor: pointer;
  /* background-color: lightgreen; */
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 38px;
  border-radius: 16px;
  border: 2px solid black;
  margin: 0px 0px 0px 120px;
  cursor: pointer;
  background-image: url("https://i.pinimg.com/564x/14/4b/a9/144ba9c008b781d52fb03f4ef05ba441.jpg");
  background-position: 30%;
  /* background-color: whitesmoke; */
  /* background-color: lightgreen; */
`;
