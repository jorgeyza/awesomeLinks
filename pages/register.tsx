import { Container, Heading } from '@chakra-ui/react';
import Form from 'components/Form';
import type { NextPage } from 'next';

const Register: NextPage = () => (
  <Container maxW='container.md'>
    <Heading as='h1'>Register</Heading>
    <Form />
  </Container>
);

export default Register;
