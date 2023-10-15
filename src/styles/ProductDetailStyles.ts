export const ProductDetailPageStyles = (isSmallScreen: boolean) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: isSmallScreen ? '84vh' : '80vh',
});

export const ProductDetailCardStyles = (isSmallScreen: boolean) => ({
	display: 'flex',
	flexDirection: isSmallScreen ? 'column' : 'row',
	alignItems: 'center',
	minHeight: '70vh',
	width: isSmallScreen ? '80%' : '90%',
	padding: '0.5rem',
	margin: '2rem 0',
});

export const ProductCardMediaStyles = (
	isVerySmallScreen: boolean,
	isSmallScreen: boolean,
	isMediumScreen:boolean
) => ({
	height: isVerySmallScreen ? '9rem' : isSmallScreen ? '14rem' : isMediumScreen ? '17rem':'20rem',
	width: isVerySmallScreen ? '9rem' : isSmallScreen ? '14rem' : isMediumScreen ? '17rem':'20rem',
	objectFit: 'contain',
	margin: '1rem',
});

export const ProductCardTitleStyles = (
	isVerySmallScreen: boolean,
	isSmallScreen: boolean
) => ({
	marginTop: '0.8rem',
	fontSize: isVerySmallScreen ? '1rem' : isSmallScreen ? '1.2rem' : '1.35rem',
	textAlign: 'center'
});

export const ProductCardDetailsStyles = (
	isVerySmallScreen: boolean,
	isSmallScreen: boolean,
	verySmall: string,
	small: string,
	large: string,
	color: string
) => ({
	marginTop: '0.8rem',
	fontSize: isVerySmallScreen ? verySmall : isSmallScreen ? small : large,
	color: color,
	padding: '0.3rem'
});
