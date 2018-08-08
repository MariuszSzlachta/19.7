import React from 'react';
import styles from './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment}) => (
<li className={styles.Comment}>
  {text}
  <span className={styles.Comment__Vote}>votes: {votes}</span>
  <button className={styles.btn} onClick={() => thumbUpComment(id)}>Thumb up</button>
  <button className={styles.btn} onClick={() => thumbDownComment(id)}>Thumb Down</button>
  <button className={styles.btn} onClick={() => removeComment(id)}>Remove</button>
  <button className={styles.btn} onClick={ () => editComment(id, prompt('Enter new comment', text))}>Edit</button>
</li>)

export default Comment;

// Czy jakbym nie używał destrukturyzacji to było by tak:
/* <button onClick={() => props.removeComment(id)} /> */