import { useRef, useState } from 'react';
import { Snackbar } from '@mui/material';
import emailjs from '@emailjs/browser';

import ReCAPTCHA from 'react-google-recaptcha';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const form = useRef();

  const onChange = () => {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    validateForm(formData);
    e.preventDefault();
    emailjs.sendForm('service_ri8b7ew', 'template_d8t10oe', form.current, 'tAb2j18rQ3RGup-4i').then(
      (res) => {
        setSnackOpen(true);
        form.current.reset();
      },
      (err) => console.log(err.text)
    );
  };

  const validateForm = () => {};

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sed molestiae quos
          enim quas facere? Delectus reiciendis, eos soluta unde, nemo quod molestiae quia sed
          commodi, officia ut amet asperiores!
        </Desc>
        <Form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <FormTitle>Email me &#x1F680;</FormTitle>
          <FormInput
            placeholder="Your Email"
            name="email"
            onChange={(e) => handleChange(e)}
            value={formData.email}
          ></FormInput>
          <FormInput
            placeholder="Your Name"
            name="name"
            onChange={(e) => handleChange(e)}
            value={formData.name}
          ></FormInput>
          <FormInput
            placeholder="Subject"
            name="subject"
            onChange={(e) => handleChange(e)}
            value={formData.subject}
          ></FormInput>
          <FormMessage
            placeholder="Message"
            rows={4}
            onChange={(e) => handleChange(e)}
            name="message"
          ></FormMessage>

          <ReCAPTCHA sitekey="6LeJNe0nAAAAAKzn_K758aJ8SxiMaJnzYrlFnpM4" onChange={onChange} />

          <FormButton type="submit" value="send">
            Send
          </FormButton>
        </Form>
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={() => setSnackOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
