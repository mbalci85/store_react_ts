import { FormEvent, useContext, useRef } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { Box, Button, Container, FormLabel, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);

	const form = useRef<HTMLFormElement | null>(null); // Initialize the ref as a reference to an HTMLFormElement

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					'service_l5kbkek',
					'template_8xwr2oj',
					form.current, // e.currentTarget also works without condition
					'LuahvMQYF1YkE5sVb'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: isVerySmallScreen ? '84vh' : '80vh',
				}}>
				<form
					ref={form}
					onSubmit={sendEmail}
					style={{
						border: '0.1rem  solid lightgray',
						borderRadius: '0.3rem',
						padding: '1.5rem',
						margin: '2rem 0',
						boxShadow: '0.1rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
						transition: '0.3s',
						width: '90%',
						backgroundColor: '#EFEFEF',
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
						name='from_name'
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
						name='email'
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
						name='message'
					/>
					<Button
						variant='contained'
						size='small'
						sx={{ alignSelf: 'center', width: '80%', margin: '1rem 0' }}
						type='submit'>
						Submit <SendIcon sx={{ marginLeft: '0.5rem' }} />
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default ContactUs;
