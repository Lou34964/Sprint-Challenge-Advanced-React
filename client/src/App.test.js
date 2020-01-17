import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useAPI} from './hooks/useAPI';

// unit test react components
test('renders without crashing', () => {  
  render(<App />);
});
