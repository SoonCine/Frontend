import React from 'react';
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
} from './ProfileStyled';
import axios from 'axios';
import { TotalInput } from '../../component/totalInput/TotalInputStyled';
import useInput from '../../hook/hook';
import { TotalButton } from '../../component/totalButton/TotalButtonStyled';
import { useState } from 'react';
import instance from '../../token/instance/instance';
import { useEffect } from 'react';

const Profile =  () => {

  const userList =  instance
    .post('/api/auth/member/profile')
    .then((res) =>res.data.data);
  const [img, setImg] = useInput('');
  const [display, setDisplay] = useState('none');
  console.log(userList)
 
//   useEffect(async ()=>{
//     const userList = await instance.post('/api/auth/member/profile').then((res)=>res)
//     return userList
//   },[])
console.log(userList)
//   console.log(token);

  const uploadPicture = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      const formdata = new FormData();
      formdata.append('img', img);
      axios.post(
        'http://54.180.89.34:8080/api/auth/member/profileupdateimg',
        formdata
      );
    }
  };
  return (
    <ListWrap>
      <AddImgArea>
        <ButtonArea>
          <TotalButton onClick={uploadPicture} color={'#F3E3DD'}>
            이미지 추가하기
          </TotalButton>
        </ButtonArea>

        <InputArea>
          <TotalInput
            color="#F3E3DD"
            onChange={setImg}
            display={display}
            placeholder="이미지 주소를 입력해주세요"
          ></TotalInput>
        </InputArea>
      </AddImgArea>

      <ListMovieImageBox>
        <ListMovieImage
          src={
            userList.profileimg
              ? userList.profileimg
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf85dv87L-QUBgTu6c8_OrOjHGFkldiqpx31GaI65ut4X0BbqtUvSPJWxyyuiD9bvKqzA&usqp=CAU'
          }
          alt="profile"
        />
      </ListMovieImageBox>
      <ListContents>
        <ListDate>
          {localStorage.Nickname ? localStorage.Nickname : '정보가 없습니다'}
        </ListDate>

        <ListContentsHead>
          <DateArea>
            가입 날짜:{' '}
            {userList.createdAt
              ? userList.createdAt.slice(0, 2)
              : '정보가 없습니다'}
          </DateArea>
          <EmailArea>
            가입 이메일: {userList.email ? userList.email : '정보가 없습니다'}
          </EmailArea>
        </ListContentsHead>
      </ListContents>
    </ListWrap>
  );
};
export default Profile;
