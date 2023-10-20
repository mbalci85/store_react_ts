import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Button, Typography } from '@mui/material';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import CartItem from '../../components/CartItem/CartItem';
import * as styles from '../../styles/CheckoutStyles';
import CheckoutDialog from '../../components/CheckoutDialog/CheckoutDialog';
import CheckoutUtils from '../../utils/CheckoutUtils';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Checkout = () => {
	const { isVerySmallScreen, isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const { cartItemsIds, handleCartItems, cartItems } = useContext(CartItemContext);
	const { theme } = useContext(ThemeContext);
	const [isModelOpen, setIsModelOpen] = useState<boolean>(false);

	const openModel = () => {
		setIsModelOpen(true);
	};

	const headerItem = CheckoutUtils.headerGenerator(isSmallScreen ? '40vw' : '30vw', 'Item');
	const headerPrice = CheckoutUtils.headerGenerator('12vw', isVerySmallScreen ? '£' : 'Price');
	const headerQuantity = CheckoutUtils.headerGenerator('12vw', isVerySmallScreen ? '#' : 'Quantity');
	const headerTotal = CheckoutUtils.headerGenerator('12vw', 'Total');
	const headerRemove = CheckoutUtils.headerGenerator('12vw', isVerySmallScreen ? '' : 'Remove');

	const [balance, setBalance] = useState<number>(0);
	useEffect(() => {
		setBalance(cartItems.reduce((sum, item) => sum + item.price, 0)); //calculates initial total and is used to calculate final total
	}, []);

	return (
		<>
			<CheckoutDialog isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />

			{cartItemsIds.length === 0 ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: isSmallScreen ? '84vh' : '80vh',
					}}>
					<Typography
						variant={isVerySmallScreen ? 'body1' : isSmallScreen ? 'h5' : 'h4'}
						color={theme === 'Light' ? 'error' : 'white'}>
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
						minHeight: isSmallScreen ? '84vh' : '80vh',
					}}>
					<Box sx={styles.CheckoutBoxStyles()}>
						<Box sx={{ display: 'flex' }}>
							{headerItem}
							{headerPrice}
							{headerQuantity}
							{headerTotal}
							{headerRemove}
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
							margin: isSmallScreen ? '0 6vw 2rem 0' : '0 11vw 2rem 0',
						}}>
						<Typography
							variant={isSmallScreen ? 'body2' : isMediumScreen ? 'body1' : 'h6'}
							sx={{ marginBottom: '0.3rem', color: theme === 'Light' ? null : 'white' }}>
							Total £{balance.toFixed(2)}
						</Typography>
						<Button
							variant='contained'
							size={isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'}
							onClick={openModel}>
							Check Out
						</Button>
					</Box>
				</Box>
			)}
		</>
	);
};

export default Checkout;
