import React from 'react';
import { 
  Box,
  Container
} from '@chakra-ui/react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
