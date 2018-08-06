import React from 'react';
import styles from './App.css'
import CommentsList from './CommentsListContainer';

const App = (props) => {
  console.log(styles.App);
  return (
    <div className={styles.App}>
      <button className={styles.btn} onClick={props.addComment}>Add Comment</button>
      <CommentsList />
    </div>
  );
};

export default App;