import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Footer = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { theme } = useContext(ThemeContext);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: isSmallScreen ? '8vh' : '10vh',
				padding: '0 1rem',
				borderTop: 'solid 0.1rem #fad2d2',
			}}>
			<Typography
				variant={isSmallScreen ? 'body2' : 'body1'}
				sx={{ color: theme === 'Light' ? 'coral' : 'white' }}>
				Balci Store@React-TS
			</Typography>
			<Link to='/contact-us' style={{ textDecoration: 'none', color: theme === 'Light' ? 'coral' : 'white' }}>
				Contact Us
			</Link>
		</Box>
	);
};

export default Footer;
