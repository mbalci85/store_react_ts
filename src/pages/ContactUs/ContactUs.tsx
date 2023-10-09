import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box } from '@mui/material';

const ContactUs = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: isVerySmallScreen ? '84vh' : '80vh',
			}}>
			Contact Us
		</Box>
	);
};

export default ContactUs;
