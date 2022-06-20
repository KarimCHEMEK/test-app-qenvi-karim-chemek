import AlbumsPhotosService from '../../../services/albumsPhotos.service';
import actions from "./albumsPhotos.actions";

export const loadAlbumsPhotosAsync = () => (dispatch) => {
	dispatch(actions.albumsPhotosLoadStart());

	AlbumsPhotosService.getAllAlbumsPhotos()
		.then((response) => dispatch(actions.albumsPhotosLoadSuccess(response.data)))
		.catch((error) => dispatch(actions.albumsPhotosLoadError(error.message)));
};