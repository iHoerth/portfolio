import { useRef, useState } from 'react';
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

import {
  Container,
  Wrapper,
  Title,
  Desc,
  Form,
  FormTitle,
  FormInput,
  FormMessage,
  FormButton,
} from './components';

const Contact = () => {
  const [snackOpen, setSnackOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ri8b7ew', 'template_d8t10oe', form.current, 'tAb2j18rQ3RGup-4i').then(
      (res) => {
        setSnackOpen(true);
        form.current.reset();
      },
      (err) => console.log(err.text)
    );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to get in touch with me or if there are any opportunities you'd like to discuss!</Desc>
        <Form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <FormTitle>Email me &#x1F680;</FormTitle>
          <FormInput placeholder="Your Email" name="email" />
          <FormInput placeholder="Your Name" name="name" />
          <FormInput placeholder="Subject" name="subject" />
          <FormMessage placeholder="Message" rows={4} name="message" />
          <FormButton type="submit" value="send">
            Send
          </FormButton>
        </Form>
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={() => setSnackOpen(false)}
          severity="success"
          sx={{ backgroundColor: '#4caf50' }}
        >
          <div style={{ backgroundColor: '#4caf50' }}>Mail enviado</div>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
