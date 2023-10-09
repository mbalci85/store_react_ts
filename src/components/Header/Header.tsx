import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, IconButton, Toolbar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				height: isVerySmallScreen ? '8vh' : '10vh',
				borderBottom: 'solid 0.1rem #fad2d2',
			}}>
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
							fontSize={isVerySmallScreen ? 'medium' : 'large'}
							onClick={() => {
								navigate('/checkout');
							}}
						/>
					</Badge>
				</IconButton>
			</Toolbar>
		</Box>
	);
};

export default Header;
