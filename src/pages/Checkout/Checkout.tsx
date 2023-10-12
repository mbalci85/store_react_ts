import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Button, Typography } from '@mui/material';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import CartItem from '../../components/CartItem/CartItem';

const Checkout = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds, handleCartItems, cartItems, balance, setBalance } =
		useContext(CartItemContext);
	const headerGenerator = (width: string, title: string) => {
		return (
			<Typography
				sx={{
					width: { width },
					textAlign: 'center',
					fontSize: isVerySmallScreen
						? '0.85rem'
						: isSmallScreen
						? '1.1rem'
						: '1.25rem',
					color: 'gray',
					fontWeight: 'bold',
				}}>
				{title}
			</Typography>
		);
	};

	useEffect(() => {
		setBalance(cartItems.reduce((sum, item) => sum + item.price, 0));
	}, []);

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
							{headerGenerator('12vw', '£')}
							{headerGenerator('12vw', '#')}
							{headerGenerator('12vw', 'Total')}
							{headerGenerator('12vw', '')}
						</Box>
						<Box>
							{cartItems.map((cartItem) => {
								cartItem.quantity = 1;
								return (
									<CartItem
										key={cartItem.id}
										cartItem={cartItem}
										handleCartItems={handleCartItems}
										setBalance={setBalance}
										balance={balance}
									/>
								);
							})}
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignSelf: 'flex-end',
							alignItems: 'center',
							margin: '0 1.5rem 2rem 0',
						}}>
						<Typography variant='body2' sx={{ marginBottom: '0.3rem' }}>
							Total £{balance.toFixed(2)}{' '}
						</Typography>
						<Button variant='contained' size='small'>
							Check Out
						</Button>
					</Box>
				</Box>
			)}
		</>
	);
};

export default Checkout;
