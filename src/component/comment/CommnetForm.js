import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  CommentNbutton,
  InputComment,
  SaveButton,
} from '../../pages/detail/DetailStyled';
import { addCommentList } from '../../redux/modules/comment';

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commentList);
  console.log('---------', comments);

  const [inputForm, setInputForm] = useState('');

  // console.log(inputForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContents = { postId: { id }.id, content: inputForm };
      console.log('22222222222', newContents);
      dispatch(addCommentList(newContents));
      setInputForm('');
    } else {
      alert('내용을 입력해주세요');
    }
  };

  return (
    <CommentNbutton>
      <InputComment
        type="text"
        placeholder="댓글을 입력해 주세요."
        value={inputForm}
        onChange={(e) => setInputForm(e.target.value)}></InputComment>

      <SaveButton action="" type="submit" onClick={handleSubmit}>
        등록
      </SaveButton>
    </CommentNbutton>
  );
};

export default CommentForm;
