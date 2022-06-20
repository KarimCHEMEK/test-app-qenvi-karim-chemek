import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper, Container, ImageList, ImageListItem  } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { loadAlbumsPhotosAsync } from "../redux/reducers/albumsPhotos/albumsPhotos.thunks";

const AlbumPhotosListing = ({match}) => {
	const dispatch = useDispatch();
	const { isLoading, albumsPhotos, errorMessage } = useSelector((state) => state.albumsPhotos);
	const { albums } = useSelector((state) => state.albums);

	useEffect(() => {
		dispatch(loadAlbumsPhotosAsync());
	}, []);

	return (
		<div>
			<Container  fixed={true}>
			<Paper
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '10px',
					margin: '10px',
					width: '80%'
				}}
			>
				<Grid container direction="column" justifyContent="center" alignItems="center">
				{albums && albums.filter(album => album.id == match.params.albumId).map((album) => 
			<div key={album.id}>

				<Typography fontWeight={500} variant="h3">Voici les images de l’album {album.title}</Typography>
				
			</div>
			)}
				</Grid>
			</Paper>
			<Paper
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '10px',
					margin: '10px',
					width: '80%',
					height: '80%'
				}}
			>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			<ImageList sx={{ width: 600, height: 600 }} cols={6} rowHeight={164}>
  				{albumsPhotos && albumsPhotos.filter(item => item.albumId == match.params.albumId).map((item) => (
   				 <ImageListItem key={item.id}>
					<img
						src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading="lazy"
					/>
   				 </ImageListItem>
  				))}
			</ImageList>
			</Paper>
			</Container>
			
		</div>
	);
};

export default AlbumPhotosListing;