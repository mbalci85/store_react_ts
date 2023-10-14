import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Button, Container, FormControl, FormLabel, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: isVerySmallScreen ? '84vh' : '80vh',
				}}>
				<FormControl
					sx={{
						border: '0.1rem  solid lightgray',
						borderRadius: '0.3rem',
						padding: '1.5rem',
						margin: '2rem 0',
						boxShadow: '0.1rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
						transition: '0.3s',
						width: '90%',
						':hover': {
							boxShadow: '0.2rem 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2)',
						},
					}}>
					<FormLabel
						sx={{ alignSelf: 'center', color: 'coral', fontWeight: '500' }}>
						CONTACT US
					</FormLabel>
					<Input
						sx={{
							border: '0.1rem solid lightgray',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
						}}
						placeholder='Enter Name'
						required
					/>
					<Input
						sx={{
							border: '0.1rem solid lightgray',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
						}}
						placeholder='Email Address'
						type='email'
						required
					/>
					<Input
						multiline
						rows={8}
						placeholder='Write your message here...'
						required
						sx={{
							border: '0.1rem solid lightgray',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
						}}
					/>
					<Button
						variant='contained'
						size='small'
						sx={{ alignSelf: 'center', width: '80%', margin: '1rem 0' }}>
						Submit <SendIcon />
					</Button>
				</FormControl>
			</Box>
		</Container>
	);
};

export default ContactUs;
