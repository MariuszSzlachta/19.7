import { connect } from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, editComment} from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);

// Czyli, że jak z komponentu Comment wywołam np. editComment to tak naprawdę wywołam dispatch(editComment)
// czy to jest coś w stylu przekazania propsa editComment={dispatch(editComment(id, text))}

// Ale w związku z tym, że stan aplikacji trzymam w store reduxowym to używam sobie connecta by wstrzykiwać te propsy i dlatego mogę używać bezstanowych komponentów, bo nie potrzebuję używać this.state reactowego.
