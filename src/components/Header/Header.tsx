import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, IconButton, Toolbar, Badge, AppBar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { CartItemContext } from '../../contexts/CartItemContextProvider';

const Header = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds } = useContext(CartItemContext);
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				height: isVerySmallScreen ? '8vh' : '10vh',
			}}>
			<AppBar sx={{ backgroundColor: 'transparent' }}>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<Link to='/' style={{ textDecoration: 'none', color: 'coral' }}>
						Balci Store
					</Link>
					<IconButton>
						<Badge badgeContent={cartItemsIds.length} color='error'>
							<ShoppingCartIcon
								fontSize={isVerySmallScreen ? 'medium' : 'large'}
								onClick={() => {
									navigate('/checkout');
								}}
							/>
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
