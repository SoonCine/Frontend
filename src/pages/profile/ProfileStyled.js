import styled from "styled-components";
import "../../static//fonts/fonts.css";

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  border: 2px solid white;
  min-height: 100vh;

  background-image: url("https://i.pinimg.com/564x/14/4b/a9/144ba9c008b781d52fb03f4ef05ba441.jpg");
`;

export const ProfileNav = styled.div`
  justify-content: end;
  display: flex;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ListWrap = styled.div`
width: 60%;
  flex-direction: column;
  margin: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid black;
  /* box-shadow: 5px 5px 0px #000; */
  background-color: #fff;
  height: 420px;
  min-width: 240px;
  padding: 5px 0px 5px 0px;
  /* background-color: yellow; */
  position: absolute;
  left: 350px;
`;
export const ListMovieImageBox = styled.div`
width: 250px;
`;

export const ListMovieImage = styled.img`
  width: 100%;
  max-width: 210px;
  height: 100%;
  max-height: 300px;
  margin: 12px auto; //한빛님이 알려주신 방법 rem이 브라우저마다 다르게나오는거. 상대적인크기. px과 혼용x
  //rem은 폰트에 많이씀. 이건 혼용해도됨.

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid black;
  /* width: 216px;
  height: 280px; */
`;

export const ListContents = styled.div`
width: 500px;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 5px 14px;
  padding: 2px;
  width: 220px;
  /* padding: 4px; */
  /* background-color: orange; */
`;

export const ListDate = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 212px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid lightsalmon;
  padding: 2px 0px 2px 6px;
  text-align: center;


  /* background-color: skyblue; */
`;

export const ListContentsHead = styled.div`
  display: flex;
flex-direction: column;
  height: 150px;
  width: 450px;
  overflow: hidden;
  font-size: 16px;
  /* background-color: green; */

  h3 {
    width: 160px;
    max-width: 160px;
    max-height: 60px;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 16px 2px 1px 0px;
    /* text-overflow: ellipsis; */
    /* background-color: white; */
  }
  p {
    align-items: center;
    font-size: 18px;
    /* background-color: gray; */
  }
`;

export const ListContentLike = styled.div`
  align-items: center;
  display: flex;
  min-height: 50px;
  min-width: 50px;
  /* background-color: pink; */
`;

export const DateArea = styled.div`

`
export const EmailArea = styled.div`
margin-top: 10px;
`

export const ButtonArea = styled.div`
margin-left: 10px;
`

export const InputArea = styled.div`
margin-left: 10px;
`
export const AddImgArea = styled.div`
display: flex;

`