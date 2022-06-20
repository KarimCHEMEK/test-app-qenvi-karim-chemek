import apiClient from "../helpers/apiClient";

class AlbumsService {
	getAllAlbums = () => apiClient().get(`albums`);
}
//${userId}/

export default new AlbumsService();
