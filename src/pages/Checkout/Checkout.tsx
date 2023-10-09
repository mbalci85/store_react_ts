import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box } from '@mui/material';

const Checkout = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: isVerySmallScreen ? '84vh' : '80vh',
			}}>
			Checkout
		</Box>
	);
};

export default Checkout;
