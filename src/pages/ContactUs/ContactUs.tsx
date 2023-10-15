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
import * as styles from '../../styles/ContactUsStyles';

const ContactUs = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
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
					minHeight: isSmallScreen ? '84vh' : '80vh',
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
					style={styles.ContactUsFormStyles(isSmallScreen, isMediumScreen)}>
					<Typography
						variant={isSmallScreen ? 'h6' : 'h5'}
						sx={{
							color: 'coral',
							fontWeight: '500',
							marginBottom: isSmallScreen ? '0.3rem' : '0.6rem',
						}}>
						CONTACT US
					</Typography>
					<Input
						sx={styles.ContactUsInputStyles(isSmallScreen, isMediumScreen)}
						placeholder='Enter Name'
						name='from_name'
						value={formName}
						onChange={(e) => setFormName(e.target.value)}
						required
					/>
					<Input
						sx={styles.ContactUsInputStyles(isSmallScreen, isMediumScreen)}
						placeholder='Email Address'
						type='email'
						name='email'
						value={formEmail}
						onChange={(e) => setFormEmail(e.target.value)}
						required
					/>
					<Input
						multiline
						rows={8}
						placeholder='Write your message here...'
						sx={styles.ContactUsMessageBoxStyles(isSmallScreen)}
						name='message'
						value={formMessage}
						onChange={(e) => setFormMessage(e.target.value)}
						required
					/>
					{isFormSubmitted ? (
						<Button
							variant='contained'
							size={isSmallScreen ? 'small' : 'medium'}
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
