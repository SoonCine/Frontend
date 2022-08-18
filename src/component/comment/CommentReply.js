import React from "react";
import {
  CommentList,
  IndivComment,
  CommentWrap,
  CommentNickname,
  CommentContent,
  DRButtons,
  DeleteButton,
  ReviseButton,
} from "../../pages/detail/DetailStyled";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  editCommentList,
  _deleteCommentList,
} from "../../redux/modules/comment";

const Comment = ({ comment, id, inputForm, setInputForm }) => {
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(_deleteCommentList(comment.id));
  };

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
      alert("다시 적으세요");
    }
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <CommentList>
      <IndivComment>
        <CommentWrap>
          <CommentNickname> {comment.author} </CommentNickname>
          <CommentContent> {comment.content} </CommentContent>
        </CommentWrap>
        <DRButtons>
          <DeleteButton onClick={onDelete}>🗑️</DeleteButton>
          {/* <button onClick={onEdit}>수정하기</button> */}
          <ReviseButton onClick={openModal}>수정</ReviseButton>
        </DRButtons>
      </IndivComment>
    </CommentList>
  );
};

export default Comment;
