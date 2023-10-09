import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: isVerySmallScreen ? '6vh' : isSmallScreen ? '8vh' : '10vh',
				padding: '0 1rem',
			}}>
			<Typography>Balci Store @ React - TS</Typography>
			<Link to='/contact-us' style={{ textDecoration: 'none', color: 'coral' }}>
				Contact Us
			</Link>
		</Box>
	);
};

export default Footer;
