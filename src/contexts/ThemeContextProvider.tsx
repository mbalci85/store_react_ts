import { ReactNode, createContext, useEffect, useState } from 'react';

interface ThemeContextProviderProps {
	children: ReactNode;
}

interface ThemeContextTypes {
	theme: string;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextTypes>({ theme: '', toggleTheme: () => {} });

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<string>(localStorage.getItem('store-theme') || 'Light');

	const toggleTheme = () => {
		if (localStorage.getItem('store-theme') === 'Light') {
			setTheme('Dark');
			localStorage.setItem('store-theme', 'Dark');
		} else {
			setTheme('Light');
			localStorage.setItem('store-theme', 'Light');
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('store-theme')) {
			localStorage.setItem('store-theme', 'Light');
		}
	}, []);
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
