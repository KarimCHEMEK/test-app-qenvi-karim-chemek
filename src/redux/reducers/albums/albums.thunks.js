import AlbumsService from '../../../services/albums.service';
import actions from "./albums.actions";

export const loadAlbumsAsync = () => (dispatch) => {
	dispatch(actions.albumsLoadStart());

	AlbumsService.getAllAlbums()
		.then((response) => dispatch(actions.albumsLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.albumsLoadError(error.message)));
};