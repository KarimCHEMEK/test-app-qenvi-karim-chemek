import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";
import albumsReducer from "./albums/albums.reducer";
import albumsPhotosReducer from "./albumsPhotos/albumsPhotos.reducer";

const rootReducer = () =>
	combineReducers({
		users: usersReducer,
		albums: albumsReducer,
		albumsPhotos: albumsPhotosReducer,
	});

export default rootReducer;