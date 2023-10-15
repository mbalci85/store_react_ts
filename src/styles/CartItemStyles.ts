import { CSSProperties } from "react"

export const CartItemBoxStyle = ()=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: 'solid lightgray 0.1rem',
    marginBottom: '0.75rem',
    paddingTop: '0.75rem',
})


export const CartItemMediaStyles = (isSmallScreen: boolean, isMediumScreen: boolean) =>({
    height: isSmallScreen
        ? '4rem'
        : isMediumScreen
        ? '7rem'
        : '9rem',
    width: isSmallScreen
        ? '3rem'
        : isMediumScreen
        ? '6rem'
        : '8rem',
    objectFit: 'contain',
    marginRight: isSmallScreen ? '0.8rem' : '1.5rem',
    marginLeft: isSmallScreen ? '0' : '1.5rem',
})

export const CartItemInputStyles = (isSmallScreen: boolean, isMediumScreen: boolean): CSSProperties=>({
    width: '6vw',
    textAlign: 'center',
    fontSize: isSmallScreen
        ? '0.75rem'
        : isMediumScreen
        ? '0.9rem'
        : '1.2rem',
})