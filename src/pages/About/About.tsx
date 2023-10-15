import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const About = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: isSmallScreen ? '84vh' : '80vh',
				padding: '0 3rem',
			}}>
			<Typography
				variant={isSmallScreen ? 'h6' : isMediumScreen ? 'h5' : 'h4'}
				sx={{ marginBottom: '1.5rem', textAlign: 'center' }}>
				Welcome to our Store!
			</Typography>
			<Typography
				variant={isSmallScreen ? 'body2' : isMediumScreen ? 'body1' : 'h6'}
				sx={{ textAlign: 'center', marginBottom: '4rem' }}>
				Used React + Vite + TypeScript, Context API and Material-UI to bring you a
				seamless shopping experience.
			</Typography>
			<Typography
				variant={isSmallScreen ? 'body2' : isMediumScreen ? 'body1' : 'h6'}>
				CopyRight @ 2023
			</Typography>
		</Box>
	);
};

export default About;
