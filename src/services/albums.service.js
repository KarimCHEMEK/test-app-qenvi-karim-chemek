import apiClient from "../helpers/apiClient";

class AlbumsService {
	getAllAlbums = () => apiClient().get(`albums`);
}

export default new AlbumsService();
