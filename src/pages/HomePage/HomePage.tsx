import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box } from '@mui/material';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				flexWrap: 'wrap',
				minHeight: isVerySmallScreen ? '88vh' : isSmallScreen ? '84vh' : '80vh',
			}}>
			<Categories />
		</Box>
	);
};

export default HomePage;
