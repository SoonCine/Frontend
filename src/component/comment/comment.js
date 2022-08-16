import React from 'react';
import {
  CommentList,
  IndivComment,
  CommentNickname,
  CommentContent,
  DeleteButton,
} from '../../pages/detail/DetailStyled';

const Comment = (props) =>{
    return(
    <CommentList>
    <IndivComment>
      <CommentNickname> 닉네임 </CommentNickname>
      <CommentContent> {props.comment} </CommentContent>
      <DeleteButton>🗑️</DeleteButton>
    </IndivComment>
  </CommentList>)
}

export default Comment