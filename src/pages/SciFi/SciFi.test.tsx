import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SciFi from './SciFi';

describe('<SciFi />', () => {
  test('it should mount', () => {
    render(<SciFi />);
    
    const sciFi = screen.getByTestId('SciFi');

    expect(sciFi).toBeInTheDocument();
  });
});