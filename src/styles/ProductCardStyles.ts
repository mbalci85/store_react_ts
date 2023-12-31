export const ProductCardStyles = (theme: string) => ({
	display: 'flex',
	flexDirection: 'column',
	height: '30rem',
	width: '20rem',
	margin: '2rem 1rem',
	boxShadow: '0.1rem 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2)',
	position: 'relative',
	backgroundColor: theme === 'Light' ? null : 'gray',
	color: theme === 'Light' ? null : 'white',
});

export const ProductCardMediaStyles = (theme: string) => ({
	height: '15rem',
	width: '75%',
	margin: '1rem',
	objectFit: 'contain',
	alignSelf: 'center',
	border: '0.05rem solid lightgray',
	padding: '1rem',
	borderRadius: '0.2rem',
	boxShadow: '0.2rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3)',
	backgroundColor: theme === 'Light' ? null : 'white',
});

export const ProductCardContentStyles = () => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: '13rem',
	width: '80%',
	margin: '0 1rem',
});
