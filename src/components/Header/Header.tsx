import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, IconButton, Badge, AppBar, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { CartItemContext } from '../../contexts/CartItemContextProvider';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds } = useContext(CartItemContext);
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				height: isSmallScreen ? '8vh' : '10vh',
			}}>
			<AppBar
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'transparent',
					height: isSmallScreen ? '8vh' : '10vh',
					padding: '0 0.85rem',
				}}>
				<Typography
					sx={{
						textDecoration: 'none',
						color: 'coral',
						fontWeight: '600',
						cursor: 'pointer',
					}}
					onClick={() => navigate('/')}>
					Balci Store
				</Typography>
				<Link to='/about' style={{ textDecoration: 'none', color: 'coral' }}>
					About Us
				</Link>
				<Tooltip title='Go to Checkout' placement='left'>
					<IconButton>
						<Badge badgeContent={cartItemsIds.length} color='error'>
							<ShoppingCartIcon
								fontSize={isSmallScreen ? 'medium' : 'large'}
								onClick={() => {
									navigate('/checkout');
								}}
							/>
						</Badge>
					</IconButton>
				</Tooltip>
			</AppBar>
		</Box>
	);
};

export default Header;
