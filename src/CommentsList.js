import React from 'react';
import Comment from './CommentContainer';
import styles from './CommentsList.css';
// comments to wstrzyknięta kopia state.comments utworzona w containerze

const CommentsList = ({comments}) => (
  <ul className={styles.CommentsList}>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </ul>
)

export default CommentsList;