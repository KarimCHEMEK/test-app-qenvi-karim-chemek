import actionTypes from "./albumsPhotos.actionTypes";
import initialState from "./albumsPhotos.initialState";

const albumsPhotosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ALBUMS_PHOTOS_LOAD_START:
			return {
				...state,
				isLoading: true,
				albumsPhotos: null,
				errorMessage: null,
			};

		case actionTypes.ALBUMS_PHOTOS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				albumsPhotos: payload,
			};

		case actionTypes.ALBUMS_PHOTOS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default albumsPhotosReducer;