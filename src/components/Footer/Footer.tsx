import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);

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
			<Typography variant={isSmallScreen ? 'body2' : 'body1'}>
				Balci Store @ React-TS
			</Typography>
			<Link to='/contact-us' style={{ textDecoration: 'none', color: 'coral' }}>
				Contact Us
			</Link>
		</Box>
	);
};

export default Footer;
