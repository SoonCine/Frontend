import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  CommentNbutton,
  InputComment,
  SaveButton,
} from "../../pages/detail/DetailStyled";
import { addCommentList } from "../../redux/modules/comment";

const CommentForm = ({ id, inputForm, setInputForm }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commentList);

  // const [inputForm, setInputForm] = useState('');

  // console.log(inputForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContents = { postId: { id }.id, content: inputForm };
      dispatch(addCommentList(newContents));
      setInputForm("");
    } else {
      alert("내용을 입력해주세요");
    }
  };

  // const handleLimit = (num, maxlength) => {
  //   if (num.value.length > maxlength) {
  //     num.value = num.value.substr(o, maxlength);
  //   }
  // };

  return (
    <CommentNbutton>
      <InputComment
        type="text"
        placeholder="  15자 이내로 작성해주세요."
        maxLength="15"
        value={inputForm}
        onChange={(e) => setInputForm(e.target.value)}
      ></InputComment>

      <SaveButton action="" type="submit" onClick={handleSubmit}>
        등록
      </SaveButton>
    </CommentNbutton>
  );
};

export default CommentForm;
