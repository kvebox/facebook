import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveAllLikes = likes => ({
    type: RECEIVE_ALL_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = () => ({
    type: REMOVE_LIKE
});
