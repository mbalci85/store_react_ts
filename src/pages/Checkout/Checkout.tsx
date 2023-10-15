import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Paper,
	Typography,
} from '@mui/material';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import CartItem from '../../components/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
	const { isVerySmallScreen, isSmallScreen, isMediumScreen } =
		useContext(MediaQueryContext);
	const { cartItemsIds, handleCartItems, cartItems, setCartItemsIds } =
		useContext(CartItemContext);

	const [isModelOpen, setIsModelOpen] = useState<boolean>(false);

	const navigate = useNavigate();

	const openModel = () => {
		setIsModelOpen(true);
	};

	const closeModel = () => {
		setIsModelOpen(false);
	};

	const headerGenerator = (width: string, title: string) => {
		return (
			<Typography
				sx={{
					width: { width },
					textAlign: 'center',
					fontSize: isSmallScreen
						? '0.9rem'
						: isMediumScreen
						? '1.1rem'
						: '1.3rem',
					color: 'gray',
					fontWeight: 'bold',
					padding: isSmallScreen ? '0' : '1rem',
				}}>
				{title}
			</Typography>
		);
	};

	const [balance, setBalance] = useState<number>(0);
	useEffect(() => {
		setBalance(cartItems.reduce((sum, item) => sum + item.price, 0)); //calculates initial total and is used to calculate final total
	}, []);

	return (
		<>
			<Dialog open={isModelOpen} onClose={closeModel}>
				<Paper
					sx={{
						padding: '1rem',
					}}>
					<DialogTitle
						sx={{
							fontSize: isSmallScreen ? '1rem' : '1.5rem',
							color: 'green',
							fontWeight: 'bold',
						}}>
						Your order was successful!
					</DialogTitle>
					<DialogContent>
						<DialogContentText
							sx={{ fontSize: isSmallScreen ? '0.75rem' : '1.25rem' }}>
							Check your email for the order confirmation. Thank you for
							shopping with Balci Store!
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							variant='contained'
							size={isSmallScreen ? 'small' : 'medium'}
							onClick={() => {
								navigate('/');
								localStorage.setItem('cart-items-ids', '[]');
								setCartItemsIds([]);
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}>
							Return to Home Page
						</Button>
					</DialogActions>
				</Paper>
			</Dialog>

			{cartItemsIds.length === 0 ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: isSmallScreen ? '84vh' : '80vh',
					}}>
					<Typography
						variant={
							isVerySmallScreen ? 'body1' : isSmallScreen ? 'h5' : 'h4'
						}
						color='error'>
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
					<Box
						sx={{
							backgroundColor: 'white',
							margin: '3rem 0 2rem 0',
							padding: '0.5rem',
							border: '0.1rem solid lightgray',
							borderRadius: '0.4rem',
							boxShadow: '0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
							transition: '0.3s',
							':hover': {
								boxShadow:
									'0.2rem 0.2rem 0.3rem 0.3rem rgba(0, 0, 0, 0.2)',
							},
						}}>
						<Box sx={{ display: 'flex' }}>
							{headerGenerator(isSmallScreen ? '40vw' : '30vw', 'Item')}
							{headerGenerator('12vw', isVerySmallScreen ? '£' : 'Price')}
							{headerGenerator(
								'12vw',
								isVerySmallScreen ? '#' : 'Quantity'
							)}
							{headerGenerator('12vw', 'Total')}
							{headerGenerator('12vw', isVerySmallScreen ? '' : 'Remove')}
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
							variant={
								isSmallScreen ? 'body2' : isMediumScreen ? 'body1' : 'h6'
							}
							sx={{ marginBottom: '0.3rem' }}>
							Total £{balance.toFixed(2)}
						</Typography>
						<Button
							variant='contained'
							size={
								isSmallScreen
									? 'small'
									: isMediumScreen
									? 'medium'
									: 'large'
							}
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
