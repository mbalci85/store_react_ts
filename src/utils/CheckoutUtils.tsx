import { Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../contexts/MediaQueryContextProvider';

const CheckoutUtils = {
	headerGenerator: (width: string, title: string) => {
		const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
		return (
			<Typography
				sx={{
					width: { width },
					textAlign: 'center',
					fontSize: isSmallScreen ? '0.9rem' : isMediumScreen ? '1.1rem' : '1.3rem',
					color: 'gray',
					fontWeight: 'bold',
					padding: isSmallScreen ? '0' : '1rem',
				}}>
				{title}
			</Typography>
		);
	},
};

export default CheckoutUtils;

// const headerGenerator = (width: string, title: string) => {
//     return (

//     );
// };
