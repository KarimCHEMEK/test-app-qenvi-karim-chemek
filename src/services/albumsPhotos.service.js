import apiClient from "../helpers/apiClient";

class AlbumsPhotosService {
	getAllAlbumsPhotos = () => apiClient().get(`photos`);
}

export default new AlbumsPhotosService();
