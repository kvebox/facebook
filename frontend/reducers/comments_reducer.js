import { REMOVE_COMMENT, RECEIVE_ALL_POST_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POST_COMMENTS:
            newState = action.comments;
            return newState;
        case RECEIVE_COMMENT:
            // debugger
            // newState[action.comment.id] = action.comment;
            // return newState;
        case REMOVE_COMMENT:
            // delete newState[action.comment];
            // return newState;
        default:
            return state;
    }
};

export default commentsReducer;