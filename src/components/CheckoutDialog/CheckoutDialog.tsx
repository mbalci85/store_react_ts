import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { CartItemContext } from '../../contexts/CartItemContextProvider';

interface CheckoutDialogProps {
	isModelOpen: boolean;
	setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckoutDialog = ({ isModelOpen, setIsModelOpen }: CheckoutDialogProps) => {
	const navigate = useNavigate();

	const { isSmallScreen } = useContext(MediaQueryContext);
	const { setCartItemsIds } = useContext(CartItemContext);

	const closeModel = () => {
		setIsModelOpen(false);
	};
	return (
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
					<DialogContentText sx={{ fontSize: isSmallScreen ? '0.75rem' : '1.25rem' }}>
						Check your email for the order confirmation. Thank you for shopping with Balci Store!
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
	);
};

export default CheckoutDialog;
