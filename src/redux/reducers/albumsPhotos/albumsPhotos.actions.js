import actionTypes from "./albumsPhotos.actionTypes";

const albumsPhotosLoadStart = () => ({
	type: actionTypes.ALBUMS_PHOTOS_LOAD_START,
});

const albumsPhotosLoadSuccess = (albumsPhotos) => ({
	type: actionTypes.ALBUMS_PHOTOS_LOAD_SUCCESS,
	payload: albumsPhotos,
});

const albumsPhotosLoadError = (errorMessage) => ({
	type: actionTypes.ALBUMS_PHOTOS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	albumsPhotosLoadStart,
	albumsPhotosLoadSuccess,
	albumsPhotosLoadError,
};
