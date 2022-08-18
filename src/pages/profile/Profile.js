import React from "react";
import {
  ListWrap,
  ListMovieImageBox,
  ListMovieImage,
  ListContents,
  ListDate,
  ListContentsHead,
  EmailArea,
  DateArea,
  ButtonArea,
  InputArea,
  AddImgArea,
  AllBox,
} from "./ProfileStyled";
import { TotalInput } from "../../component/totalInput/TotalInputStyled";
import useInput from "../../hook/hook";
import { TotalButton } from "../../component/totalButton/TotalButtonStyled";
import { useState } from "react";
import instance from "../../token/instance/instance";
import axios from "axios";

const Profile = () => {
  instance.post("/api/auth/member/profile").then((res) => {
    setnickname(res.data.data.nickname);
    setemail(res.data.data.email);
    setcreatedAt(res.data.data.createdAt.slice(0, 3));
  });

  const [img, setImg] = useInput("");
  const [display, setDisplay] = useState("none");
  const [nickname, setnickname] = useState("");
  const [email, setemail] = useState("");
  const [profileimg, setprofileimg] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const json = {
    images: img,
  };

  const uploadPicture = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      const formdata = new FormData();
      formdata.append('images', img);
      // 접근은 img.file[0]
      instance.post(
        '/api/auth/member/profileupdateimges',
        json
      ).then((res)=>setprofileimg(res.data.data.profileimg))
    setDisplay('none')
    }
  };
  return (
    <>
      <ListWrap>
        {/* <button onClick={test}>테스트</button> */}
        <AddImgArea>
          <ButtonArea>
            <TotalButton onClick={uploadPicture} color={"#F3E3DD"}>
              이미지 추가하기
            </TotalButton>
          </ButtonArea>

          <InputArea>
            <TotalInput
              color="#F3E3DD"
              onChange={setImg}
              display={display}
              placeholder="파일을 업로드 해주세요."
            ></TotalInput>
          </InputArea>
        </AddImgArea>

        <ListMovieImageBox>
          <ListMovieImage
            src={
              profileimg
                ? profileimg
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf85dv87L-QUBgTu6c8_OrOjHGFkldiqpx31GaI65ut4X0BbqtUvSPJWxyyuiD9bvKqzA&usqp=CAU"
            }
            alt="profile"
          />
        </ListMovieImageBox>
        <ListContents>
          <ListDate>
            {localStorage.Nickname ? localStorage.Nickname : "정보가 없습니다"}
          </ListDate>

          <ListContentsHead>
            <DateArea>
              가입 날짜:{" "}
              {createdAt ? createdAt.slice(0, 3).join(" ") : "정보가 없습니다"}
            </DateArea>
            <EmailArea>
              가입 이메일: {email ? email : "정보가 없습니다"}
            </EmailArea>
          </ListContentsHead>
        </ListContents>
      </ListWrap>
    </>
  );
};
export default Profile;
