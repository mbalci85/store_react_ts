import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { AppBar, Box, IconButton, Toolbar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				height: isVerySmallScreen ? '6vh' : isSmallScreen ? '8vh' : '10vh',
			}}>
			<AppBar
				sx={{
					backgroundColor: 'transparent',
				}}
				position='sticky'>
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
						<Badge badgeContent={4} color='error'>
							<ShoppingCartIcon
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
