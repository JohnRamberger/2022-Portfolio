import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Simple from './Simple';

describe('<Simple />', () => {
  test('it should mount', () => {
    render(<Simple />);
    
    const simple = screen.getByTestId('Simple');

    expect(simple).toBeInTheDocument();
  });
});