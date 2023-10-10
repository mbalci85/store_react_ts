import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import ContactUs from './pages/ContactUs/ContactUs';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';
import Products from './pages/Products/Products';
import CategoriesContextProvider from './contexts/CategoriesContextProvider';
import ProductsContextProvider from './contexts/ProductsContextProvider';
import CartItemContextProvider from './contexts/CartItemContextProvider';

const App = () => {
	return (
		<Box
			sx={{
				backgroundImage:
					'url(https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				minHeight: '100vh',
			}}>
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
									<Route
										path='product-detail/:id'
										element={<ProductDetail />}
									/>
									<Route path='/checkout' element={<Checkout />} />
									<Route path='/contact-us' element={<ContactUs />} />
								</Routes>
								<Footer />
							</Router>
						</CategoriesContextProvider>
					</MediaQueryContextProvider>
				</ProductsContextProvider>
			</CartItemContextProvider>
		</Box>
	);
};

export default App;
