import { useMediaQuery } from '@mui/material';
import { ReactNode, createContext } from 'react';

interface MediaQueryContextProviderProps {
	children: ReactNode;
}

interface MediaQueryContextTypes {
	isVerySmallScreen: boolean;
	isSmallScreen: boolean;
	isMediumScreen: boolean;
}

export const MediaQueryContext = createContext<MediaQueryContextTypes>({
	isVerySmallScreen: false,
	isMediumScreen: false,
	isSmallScreen: false,
});

const MediaQueryContextProvider = (props: MediaQueryContextProviderProps) => {
	const isVerySmallScreen = useMediaQuery('(max-width: 415px)');
	const isSmallScreen = useMediaQuery('(max-width: 678px)');
	const isMediumScreen = useMediaQuery('(max-width:960px)');

	return (
		<MediaQueryContext.Provider
			value={{ isVerySmallScreen, isSmallScreen, isMediumScreen }}>
			{props.children}
		</MediaQueryContext.Provider>
	);
};

export default MediaQueryContextProvider;
