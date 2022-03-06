import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { FormData } from './Form';

import { CbRequiredIndicator } from 'utils/components/ChakraRequiredIndicator';

interface FormErrors {
  email?: FieldError | undefined;
  password?: FieldError | undefined;
  name?: FieldError | undefined;
}

interface InputProps {
  errors: FormErrors;
  register: UseFormRegister<FormData>;
}

export const NameInput = ({ errors, register }: InputProps) => (
  <FormControl isInvalid={!!errors?.name}>
    <FormLabel htmlFor='name'>
      Name
      <CbRequiredIndicator />
    </FormLabel>
    <Input id='name' placeholder='Type your name' {...register('name')} />
    <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
  </FormControl>
);

export const EmailInput = ({ errors, register }: InputProps) => (
  <FormControl isInvalid={!!errors?.email}>
    <FormLabel htmlFor='email'>
      Email
      <CbRequiredIndicator />
    </FormLabel>
    <Input id='email' placeholder='Type your email' {...register('email')} />
    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
  </FormControl>
);

export const PasswordInput = ({ errors, register }: InputProps) => (
  <FormControl isInvalid={!!errors?.password}>
    <FormLabel htmlFor='password'>
      Password
      <CbRequiredIndicator />
    </FormLabel>
    <Input id='password' placeholder='Type your password' type='password' {...register('password')} />
    <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
  </FormControl>
);
