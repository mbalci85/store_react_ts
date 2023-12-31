import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useContext } from 'react';
import './App.css';
import { Box, CircularProgress, Typography } from '@mui/material';
import { ThemeContext } from './contexts/ThemeContextProvider';

const Header = lazy(() => import('./components/Header/Header'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const About = lazy(() => import('./pages/About/About'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));

const Products = lazy(() => import('./pages/Products/Products'));

const ProductsContextProvider = lazy(() => import('./contexts/ProductsContextProvider'));
const CartItemContextProvider = lazy(() => import('./contexts/CartItemContextProvider'));
const MediaQueryContextProvider = lazy(() => import('./contexts/MediaQueryContextProvider'));
const CategoriesContextProvider = lazy(() => import('./contexts/CategoriesContextProvider'));

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Box
			sx={{
				backgroundImage:
					theme === 'Light'
						? 'url(https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80)'
						: null,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				minHeight: '100vh',
				backgroundColor: theme === 'Light' ? null : 'black',
			}}>
			<Suspense
				fallback={
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
							backgroundImage:
								theme === 'Light'
									? 'url(https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80)'
									: 'gray',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center center',
						}}>
						<CircularProgress color={theme === 'Light' ? 'secondary' : 'error'} size={75} />
						<Typography
							variant='h4'
							sx={{ margin: '2.5rem', color: theme === 'Light' ? 'coral' : 'white' }}>
							Balci Store
						</Typography>
						<Typography variant='h6' sx={{ color: theme === 'Light' ? 'coral' : 'white' }}>
							Loading...
						</Typography>
					</Box>
				}>
				<CartItemContextProvider>
					<ProductsContextProvider>
						<MediaQueryContextProvider>
							<CategoriesContextProvider>
								<Router>
									<Header />
									<Routes>
										<Route path='/' element={<HomePage />} />
										<Route path='/about' element={<About />} />
										<Route path='/products' element={<Products />} />
										<Route path='/product-detail/:id' element={<ProductDetail />} />
										<Route path='/checkout' element={<Checkout />} />
										<Route path='/contact-us' element={<ContactUs />} />
									</Routes>
									<Footer />
								</Router>
							</CategoriesContextProvider>
						</MediaQueryContextProvider>
					</ProductsContextProvider>
				</CartItemContextProvider>
			</Suspense>
		</Box>
	);
};

export default App;
