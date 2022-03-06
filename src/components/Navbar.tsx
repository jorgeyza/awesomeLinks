import { Flex, Text } from '@chakra-ui/react';
import CustomLink from 'components/CustomLink';
import { LogoIcon, LogoText } from 'components/Logo';

const Navbar = () => (
  <Flex backgroundColor='yellow.100' color='gray.700' justifyContent='space-between' paddingX={4} paddingY={2}>
    <Flex alignItems='center' columnGap={4}>
      <CustomLink url='/'>
        <Flex alignItems='center' columnGap={4}>
          <LogoIcon />
          <LogoText />
        </Flex>
      </CustomLink>
      <CustomLink url='#'>
        <Text>Submit a link</Text>
      </CustomLink>
    </Flex>
    <Flex alignItems='center' columnGap={4}>
      <CustomLink url='/login'>
        <Text>Login</Text>
      </CustomLink>
      <CustomLink url='/register'>
        <Text>Register</Text>
      </CustomLink>
    </Flex>
  </Flex>
);

export default Navbar;
