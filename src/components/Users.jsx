import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Paper, Container  } from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../redux/reducers/users/users.thunks";
import { Link } from "react-router-dom";

const Users = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(loadUsersAsync());
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
				<Typography fontWeight={500} variant="h3">Voici la liste des utilisateurs</Typography>
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
			{users && users.map((user) => 
			<div key={user.id}>
			<Link style={{textDecoration: 'inherit'}} to={`/user/${user.id}`} > 
        		<Button color="secondary" size="large" endIcon={<AlbumIcon />} onClick={(userId) => {userId = user.id }} key={user.id}>{user.name}</Button>
			</Link>
			</div>
			)}
			</Grid>
			</Container>
			</Paper>
		</div>
		
	);
};

export default Users;
