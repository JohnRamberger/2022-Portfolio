import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectCard from './ProjectCard';

describe('<ProjectCard />', () => {
  test('it should mount', () => {
    render(<ProjectCard />);
    
    const projectCard = screen.getByTestId('ProjectCard');

    expect(projectCard).toBeInTheDocument();
  });
});