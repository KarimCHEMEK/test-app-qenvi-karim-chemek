import actionTypes from "./albums.actionTypes";

const albumsLoadStart = () => ({
	type: actionTypes.ALBUMS_LOAD_START,
});

const albumsLoadSuccess = (albums) => ({
	type: actionTypes.ALBUMS_LOAD_SUCCESS,
	payload: albums,
});

const albumsLoadError = (errorMessage) => ({
	type: actionTypes.ALBUMS_LOAD_ERROR,
	payload: errorMessage,
});


export default {
	albumsLoadStart,
	albumsLoadSuccess,
	albumsLoadError,
};
