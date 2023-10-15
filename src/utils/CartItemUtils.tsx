import { Box } from '@mui/material';
import { ReactElement, useContext } from 'react';
import { MediaQueryContext } from '../contexts/MediaQueryContextProvider';

export const CartItemUtils = {
	boxGenerator: (width: string, value: number): ReactElement => {
		const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: width,
					fontSize: isSmallScreen
						? '0.75rem'
						: isMediumScreen
						? '0.9rem'
						: '1.2rem',
				}}>
				{value}
			</Box>
		);
	},
};

export default CartItemUtils;
