import React from 'react';
import styles from './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) => (
<li className={styles.Comment}onDoubleClick={ () => editComment(id, prompt('Enter new comment', text)) }>
  {text}
  <span className={styles.Comment__Vote}>votes: {votes}</span>
  <button className={styles.btn} onClick={() => thumbUpComment(id)}>Thumb up</button>
  <button className={styles.btn} onClick={() => thumbDownComment(id)}>Thumb Down</button>
  <button className={styles.btn} onClick={() => removeComment(id)}>Remove</button>
</li>)

export default Comment;