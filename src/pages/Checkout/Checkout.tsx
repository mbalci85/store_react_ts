import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Typography } from '@mui/material';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import CartItem from '../../components/CartItem/CartItem';

const Checkout = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds, handleCartItems, cartItems, balance } =
		useContext(CartItemContext);

	const headerGenerator = (width: string, title: string) => {
		return (
			<Typography
				sx={{
					width: { width },
					textAlign: 'center',
					fontSize: isVerySmallScreen
						? '0.7rem'
						: isSmallScreen
						? '1rem'
						: '1.25rem',
					color: 'gray',
					fontWeight: 'bold',
				}}>
				{title}
			</Typography>
		);
	};

	return (
		<>
			{cartItemsIds.length === 0 ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: isVerySmallScreen ? '84vh' : '80vh',
					}}>
					<Typography color='error'>
						There is no cart items to display
					</Typography>
				</Box>
			) : (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: isVerySmallScreen ? '84vh' : '80vh',
					}}>
					<Box sx={{ backgroundColor: 'white', margin: '3rem 0 2rem 0' }}>
						<Box sx={{ display: 'flex' }}>
							{headerGenerator('40vw', 'Item')}
							{headerGenerator('12vw', 'Price')}
							{headerGenerator('12vw', 'Qty')}
							{headerGenerator('12vw', 'Remove')}
							{headerGenerator('12vw', 'Total')}
						</Box>
						<Box>
							{cartItems.map((cartItem) => {
								return (
									<CartItem
										key={cartItem.id}
										cartItem={cartItem}
										handleCartItems={handleCartItems}
									/>
								);
							})}
						</Box>
					</Box>
					<Typography>Total £{balance.toFixed(2)} </Typography>
				</Box>
			)}
		</>
	);
};

export default Checkout;
