import React from 'react';
import {
  CommentList,
  IndivComment,
  CommentNickname,
  CommentContent,
  DeleteButton,
} from '../../pages/detail/DetailStyled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  editCommentList,
  _deleteCommentList,
} from '../../redux/modules/comment';

const Comment = ({ comment, id, inputForm, setInputForm }) => {
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(_deleteCommentList(comment.id));
  };

  console.log(Comment);

  const onEdit = (e) => {
    e.preventDefault();
    const pay = {
      comment_id: comment.id,
      postId: { id }.id,
      content: comment.content,
    };
    if (inputForm) {
      dispatch(editCommentList(pay));
    } else {
      alert('다시 적으세요');
    }
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <CommentList>
      <IndivComment>
        <CommentNickname> {comment.author} </CommentNickname>
        <CommentContent> {comment.content} </CommentContent>
        <DeleteButton onClick={onDelete}>🗑️</DeleteButton>
        {/* <button onClick={onEdit}>수정하기</button> */}
        <button onClick={openModal}>수정</button>
      </IndivComment>
    </CommentList>
  );
};

export default Comment;
