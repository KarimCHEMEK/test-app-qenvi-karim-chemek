import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper, Container } from '@material-ui/core';
import PhotoIcon from '@material-ui/icons/Photo';
import { useDispatch, useSelector } from "react-redux";
import { loadAlbumsAsync } from "../redux/reducers/albums/albums.thunks";
import { Link } from "react-router-dom";

const Albums = ({match}) => {
	const dispatch = useDispatch();
	const { isLoading, albums, errorMessage } = useSelector((state) => state.albums);
	const { users } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(loadAlbumsAsync());
	}, []);

	return (
		<div>
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
				{users && users.filter(user => user.id == match.params.userId).map((user) => 
					<div key={user.id}>

						<Typography fontWeight={500} variant="h3">Voici les albums de {user.name}</Typography>
						
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
					width: '80%'
				}}
			>
			<Container maxWidth='md'>
			<Grid container direction="column" justifyContent="space-between" alignItems="center" >
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{albums && albums.filter(album => album.userId == match.params.userId).map((album) => 
			<div key={album.id}>
			<Link style={{textDecoration: 'inherit'}} to={`/albums/${album.id}/photos`} > 
				<Button color="secondary" size="large" endIcon={<PhotoIcon />} onClick={(albumId) => {albumId = album.id ;  console.log("album Id", albumId) } }  key={album.id}>{album.title}</Button>
			</Link>
			</div>
			)}
			</Grid>
			</Container>
			</Paper>
		</div>
	);
};

export default Albums;
