import { Box, Typography } from '@mui/material';

const About = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '84vh',
				padding: '0 3rem',
			}}>
			<Typography variant='h6' sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
				Welcome to our Store!
			</Typography>
			<Typography
				variant='body2'
				sx={{ textAlign: 'center', marginBottom: '4rem' }}>
				Used React + Vite + TypeScript, and Material-UI to bring you a seamless
				shopping experience.
			</Typography>
			<Typography>CopyRight @ 2023</Typography>
		</Box>
	);
};

export default About;
