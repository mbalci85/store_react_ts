import { Box, CardMedia, IconButton, Typography } from '@mui/material';
import { Product } from '../../interfaces/product';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Link } from 'react-router-dom';
import * as styles from '../../styles/CartItemStyles';
import CartItemUtils from '../../utils/CartItemUtils';

interface CartItemProps {
	cartItem: Product;
	handleCartItems: (id: number) => void;
	setBalance: (amount: number) => void;
	balance: number;
}

const CartItem = ({ cartItem, handleCartItems, setBalance, balance }: CartItemProps) => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);

	const [quantity, setQuantity] = useState<number>(1);

	const handleBalance = (qty: number) => {
		const newQuantity = qty;
		const updatedTotal = newQuantity * cartItem.price;
		const updatedBalance = balance - quantity * cartItem.price + updatedTotal;

		setBalance(updatedBalance);
		setQuantity(newQuantity);
	};

	// Invoke the boxGenerator function from CartItemUtils and use its return value
	const priceBox = CartItemUtils.boxGenerator('12vw', cartItem.price);
	const totalBox = CartItemUtils.boxGenerator(
		'12vw',
		+(cartItem.price * quantity).toFixed(2)
	);

	return (
		<Box sx={styles.CartItemBoxStyle()}>
			<Link to={`/product-detail/${cartItem.id}`}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'left',
						alignItems: 'center',
						width: isSmallScreen ? '40vw' : '30vw',
					}}>
					<CardMedia
						component='img'
						image={cartItem.image}
						title={cartItem.title}
						sx={styles.CartItemMediaStyles(isSmallScreen, isMediumScreen)}
					/>

					<Typography
						sx={{
							fontSize: isSmallScreen
								? '0.6rem'
								: isMediumScreen
								? '0.8rem'
								: '1rem',
						}}>
						{cartItem.title}
					</Typography>
				</Box>
			</Link>
			{priceBox}
			<Box sx={{ width: '12vw', textAlign: 'center' }}>
				<input
					type='number'
					min='1'
					style={styles.CartItemInputStyles(isSmallScreen, isMediumScreen)}
					value={quantity}
					onChange={(e) => {
						setQuantity(+e.target.value);
						cartItem.quantity = +e.target.value;
						handleBalance(+e.target.value);
					}}
				/>
			</Box>
			{totalBox}
			<Box sx={{ width: '12vw', textAlign: 'center' }}>
				<IconButton
					onClick={() => {
						handleCartItems(+cartItem.id);
						setBalance(balance - cartItem.price * quantity);
					}}>
					<DeleteIcon
						fontSize={
							isSmallScreen ? 'small' : isMediumScreen ? 'medium' : 'large'
						}
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default CartItem;
