import { FormEvent, useContext, useRef, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import {
	Alert,
	Box,
	Button,
	Container,
	Input,
	Snackbar,
	Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import LoadingButton from '@mui/lab/LoadingButton';

const ContactUs = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const [formName, setFormName] = useState<string>('');
	const [formEmail, setFormEmail] = useState<string>('');
	const [formMessage, setFormMessage] = useState<string>('');
	const [isSnackbarDisplayed, setIsSnackbarDisplayed] = useState<boolean>(false);
	const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(true);

	const vertical = 'top';
	const horizontal = 'center';

	const form = useRef<HTMLFormElement | null>(null); // Initialize the ref as a reference to an HTMLFormElement

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsFormSubmitted(false);

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
						setIsFormSubmitted(true);
						setIsSnackbarDisplayed(true);
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
					onSubmit={(e) => {
						e.preventDefault();
						sendEmail(e);
						setFormName('');
						setFormEmail('');
						setFormMessage('');
					}}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						border: '0.1rem  solid lightgray',
						borderRadius: '0.3rem',
						padding: '1.5rem',
						margin: '2rem 0',
						boxShadow: '0.1rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)',
						transition: '0.3s',
						width: '90%',
						backgroundColor: '#FFFF',
					}}>
					<Typography
						variant='h6'
						sx={{
							color: 'coral',
							fontWeight: '500',
							marginBottom: '0.3rem',
						}}>
						CONTACT US
					</Typography>
					<Input
						sx={{
							border: '0.1rem solid lightgray',
							borderRadius: '0.3rem',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
							width: '100%',
						}}
						placeholder='Enter Name'
						name='from_name'
						value={formName}
						onChange={(e) => setFormName(e.target.value)}
					/>
					<Input
						sx={{
							border: '0.1rem solid lightgray',
							borderRadius: '0.3rem',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
							width: '100%',
						}}
						placeholder='Email Address'
						type='email'
						name='email'
						value={formEmail}
						onChange={(e) => setFormEmail(e.target.value)}
					/>
					<Input
						multiline
						rows={8}
						placeholder='Write your message here...'
						sx={{
							border: '0.1rem solid lightgray',
							borderRadius: '0.3rem',
							marginBottom: '0.5rem',
							padding: '0.3rem',
							fontSize: '0.8rem',
							width: '100%',
						}}
						name='message'
						value={formMessage}
						onChange={(e) => setFormMessage(e.target.value)}
					/>
					{isFormSubmitted ? (
						<Button
							variant='contained'
							size='small'
							sx={{ width: '80%', margin: '1rem 0' }}
							type='submit'>
							Submit <SendIcon sx={{ marginLeft: '0.5rem' }} />
						</Button>
					) : (
						<LoadingButton
							loading
							variant='outlined'
							sx={{
								width: '80%',
								margin: '1rem 0',
								backgroundColor: 'white',
							}}>
							Submit
						</LoadingButton>
					)}
				</form>

				<Snackbar
					open={isSnackbarDisplayed}
					autoHideDuration={4000}
					onClose={() => setIsSnackbarDisplayed(false)}
					anchorOrigin={{ vertical, horizontal }}
					sx={{ marginTop: '8vh' }}>
					<Alert
						severity='success'
						onClose={() => {
							setIsSnackbarDisplayed(false);
						}}>
						Thanks for contacting us.
					</Alert>
				</Snackbar>
			</Box>
		</Container>
	);
};

export default ContactUs;
