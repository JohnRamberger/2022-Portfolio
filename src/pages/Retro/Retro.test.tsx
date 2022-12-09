import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Retro from './Retro';

describe('<Retro />', () => {
  test('it should mount', () => {
    render(<Retro />);
    
    const retro = screen.getByTestId('Retro');

    expect(retro).toBeInTheDocument();
  });
});