import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, IconButton, Badge, AppBar, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { CartItemContext } from '../../contexts/CartItemContextProvider';
import { DarkModeOutlined, LightModeRounded } from '@mui/icons-material';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { cartItemsIds } = useContext(CartItemContext);
	const { theme, toggleTheme } = useContext(ThemeContext);
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
					backgroundColor: theme === 'Light' ? 'transparent' : 'black',
					height: isSmallScreen ? '8vh' : '10vh',
					padding: '0 0.85rem',
					borderBottom: '0.1rem solid #fad2d2',
				}}>
				<Typography
					sx={{
						textDecoration: 'none',
						color: theme === 'Light' ? 'coral' : 'white',
						fontWeight: '600',
						cursor: 'pointer',
					}}
					onClick={() => navigate('/')}>
					Balci Store
				</Typography>
				<Link to='/about' style={{ textDecoration: 'none', color: theme === 'Light' ? 'coral' : 'white' }}>
					About Us
				</Link>
				<Tooltip title='Go to Checkout' placement='bottom'>
					<IconButton>
						<Badge badgeContent={cartItemsIds.length} color='error'>
							<ShoppingCartIcon
								fontSize={isSmallScreen ? 'medium' : 'large'}
								sx={{ color: theme === 'Light' ? null : 'white' }}
								onClick={() => {
									navigate('/checkout');
								}}
							/>
						</Badge>
					</IconButton>
				</Tooltip>
				<Tooltip title={theme === 'Light' ? 'Dark Mode' : 'Light Mode'} placement='bottom'>
					{theme === 'Light' ? (
						<IconButton onClick={() => toggleTheme()}>
							<DarkModeOutlined />
						</IconButton>
					) : (
						<IconButton onClick={() => toggleTheme()}>
							<LightModeRounded sx={{ color: 'white' }} />
						</IconButton>
					)}
				</Tooltip>
			</AppBar>
		</Box>
	);
};

export default Header;
