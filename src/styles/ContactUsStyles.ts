import { CSSProperties } from "react"

export const ContactUsFormStyles = (isSmallScreen:boolean, isMediumScreen:boolean):CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '0.1rem  solid lightgray',
    borderRadius: '0.3rem',
    padding: '1.5rem',
    margin: '2rem 0',
    boxShadow: '0.1rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
    transition: '0.3s',
    width: isSmallScreen ? '90%' : isMediumScreen ? '70%' : '55%',
    backgroundColor: '#FFFF',
})



export const ContactUsInputStyles = (isSmallScreen:boolean, isMediumScreen:boolean)=>({
    border: '0.1rem solid lightgray',
    borderRadius: '0.3rem',
    marginBottom: isSmallScreen ? '0.5rem' : '1rem',
    padding: '0.5rem',
    fontSize: isSmallScreen ? '0.8rem' : '1rem',
    width: '100%',
    height: isSmallScreen
        ? '2.5rem'
        : isMediumScreen
        ? '3.5rem'
        : '4rem',
})

export const ContactUsMessageBoxStyles = (isSmallScreen:boolean)=>({
    border: '0.1rem solid lightgray',
    borderRadius: '0.3rem',
    marginBottom: isSmallScreen ? '0.5rem' : '1rem',
    padding: '0.5rem',
    fontSize: isSmallScreen ? '0.8rem' : '1rem',
    width: '100%',
})