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
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sed molestiae quos
          enim quas facere? Delectus reiciendis, eos soluta unde, nemo quod molestiae quia sed
          commodi, officia ut amet asperiores!
        </Desc>
        <Form>
          <FormTitle>Email me &#x1F680;</FormTitle>
          <FormInput placeholder="Your Email"></FormInput>
          <FormInput placeholder="Your Name"></FormInput>
          <FormInput placeholder="Subject"></FormInput>
          <FormMessage placeholder="Message" rows={4}></FormMessage>
          <FormButton>Send</FormButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
