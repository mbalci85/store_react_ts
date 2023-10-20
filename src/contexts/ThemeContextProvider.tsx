import React, { ReactNode, createContext } from 'react';

interface ThemeContextProviderProps {
	children: ReactNode;
}

interface ThemeContextTypes {}

const ThemeContext = createContext<ThemeContextTypes>({});

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
	return <ThemeContext.Provider value={{}}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
