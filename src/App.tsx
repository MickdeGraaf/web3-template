import React from 'react';
import { 
  Box,
  Container
} from '@chakra-ui/react'
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth={"2xl"} p={"12"}>
        Content
      </Container>
    </Box>
  );
}

export default App;
