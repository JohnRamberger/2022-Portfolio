import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExperienceCard from './ExperienceCard';

describe('<ExperienceCard />', () => {
  test('it should mount', () => {
    render(<ExperienceCard />);
    
    const experienceCard = screen.getByTestId('ExperienceCard');

    expect(experienceCard).toBeInTheDocument();
  });
});