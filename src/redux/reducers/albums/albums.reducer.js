import actionTypes from "./albums.actionTypes";
import initialState from "./albums.initialState";

const albumsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.ALBUMS_LOAD_START:
			return {
				...state,
				isLoading: true,
				albums: null,
				errorMessage: null,
			};

		case actionTypes.ALBUMS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				albums: payload,
			};

		case actionTypes.ALBUMS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};
			
		default:
			return state;
	}
};

export default albumsReducer;