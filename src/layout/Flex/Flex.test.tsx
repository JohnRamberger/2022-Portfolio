import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flex from './Flex';

describe('<Flex />', () => {
  test('it should mount', () => {
    render(<Flex />);
    
    const flex = screen.getByTestId('Flex');

    expect(flex).toBeInTheDocument();
  });
});