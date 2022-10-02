import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Go from './Go';

describe('<Go />', () => {
  test('it should mount', () => {
    render(<Go />);
    
    const go = screen.getByTestId('Go');

    expect(go).toBeInTheDocument();
  });
});