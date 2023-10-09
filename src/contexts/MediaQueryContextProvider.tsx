import { useMediaQuery } from '@mui/material';
import { ReactNode, createContext } from 'react';

interface MediaQueryContextProviderProps {
	children: ReactNode;
}

export const MediaQueryContext = createContext<{
	isVerySmallScreen: boolean;
	isSmallScreen: boolean;
	isMediumScreen: boolean;
}>({ isVerySmallScreen: false, isMediumScreen: false, isSmallScreen: false });

const MediaQueryContextProvider = (props: MediaQueryContextProviderProps) => {
	const isVerySmallScreen = useMediaQuery('(max-width: 415px)');
	const isSmallScreen = useMediaQuery('(max-width: 600px)');
	const isMediumScreen = useMediaQuery('(max-width:960px)');

	return (
		<MediaQueryContext.Provider
			value={{ isVerySmallScreen, isSmallScreen, isMediumScreen }}>
			{props.children}
		</MediaQueryContext.Provider>
	);
};

export default MediaQueryContextProvider;
