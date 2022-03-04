import { Box, Flex } from '@chakra-ui/layout';

import Navbar from 'components/Navbar';

const Layout: React.FC = ({ children }) => (
  <Box position='relative'>
    <Navbar />
    <Flex flexDirection='column'>{children}</Flex>
  </Box>
);

export default Layout;
