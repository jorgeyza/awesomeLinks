import { Box, chakra, Flex, Text, Button, IconButton, useConst } from '@chakra-ui/react';
import { NameInput, EmailInput, PasswordInput } from './FormInputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface FormData {
  email?: string;
  password?: string;
  name?: string;
}

const schema = yup
  .object({
    email: yup.string().max(100, 'You exceeded de limit of characters').email('Input a valid email').required('Email is required'),
    name: yup.string().max(100, 'You exceeded de limit of characters').required('Name is required'),
    password: yup.string().max(100, 'You exceeded de limit of characters').required('Password is required')
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      name: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const _handleSubmit = async (formData: FormData) => {
    console.log('🚀 ~ file: lead-form.tsx ~ line 59 ~ const_handleSubmit= ~ formData', formData);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <chakra.form onSubmit={handleSubmit(_handleSubmit)}>
      <NameInput errors={errors} key='NameInput' register={register} />
      <EmailInput errors={errors} key='EmailInput' register={register} />
      <PasswordInput errors={errors} key='PasswordInput' register={register} />
      <Button colorScheme='teal' isLoading={isSubmitting} mt={4} type='submit'>
        REGISTER
      </Button>
    </chakra.form>
  );
};

export default Form;
