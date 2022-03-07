import { chakra, Checkbox, Button, Flex, FormErrorMessage, FormControl, FormLabel } from '@chakra-ui/react';
import { NameInput, EmailInput, PasswordInput } from './FormInputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface FormData {
  checkbox: string[];
  email: string;
  password: string;
  name: string;
}

const schema = yup.object({
  checkbox: yup.array().of(yup.string()).min(1, 'You must select at least one option'),
  email: yup.string().max(100, 'You exceeded de limit of characters').email('Input a valid email').required('Email is required'),
  name: yup.string().max(100, 'You exceeded de limit of characters').required('Name is required'),
  password: yup.string().max(100, 'You exceeded de limit of characters').required('Password is required')
});
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    defaultValues: {
      checkbox: false,
      email: '',
      name: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const _handleSubmit = async (formData: FormData) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log('🚀 ~ file: lead-form.tsx ~ line 59 ~ const_handleSubmit= ~ formData', formData);

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <chakra.form display='flex' flexDirection='column' onSubmit={handleSubmit(_handleSubmit)} rowGap={4}>
      <NameInput errors={errors} key='NameInput' register={register} />
      <EmailInput errors={errors} key='EmailInput' register={register} />
      <PasswordInput errors={errors} key='PasswordInput' register={register} />
      <FormControl as='fieldset' isInvalid={!!errors?.checkbox}>
        <FormLabel as='legend'>What topics are you interested in?</FormLabel>
        <Flex flexDirection='column'>
          <Checkbox value='node' {...register('checkbox')}>
            Node
          </Checkbox>
          <Checkbox value='react' {...register('checkbox')}>
            React
          </Checkbox>
          <Checkbox value='firebase' {...register('checkbox')}>
            Firebase
          </Checkbox>
          <Checkbox value='firestore' {...register('checkbox')}>
            Firestore
          </Checkbox>
        </Flex>
        <FormErrorMessage>{errors.checkbox?.message}</FormErrorMessage>
      </FormControl>
      <Button colorScheme='teal' isLoading={isSubmitting} mt={4} type='submit'>
        REGISTER
      </Button>
    </chakra.form>
  );
};

export default Form;
